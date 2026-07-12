import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request, status
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.responses import JSONResponse
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

from app.config import get_settings
from app.database import close_mongo_connection, connect_to_mongo
from app.middleware.rate_limit import limiter
from app.middleware.security import SecurityHeadersMiddleware
from app.routers import auth, contact, leads
from app.services.auth_service import ensure_admin_user

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(_app: FastAPI):
    settings = get_settings()
    logger.info("Starting %s (env=%s debug=%s)", settings.APP_NAME, settings.APP_ENV, settings.DEBUG)
    await connect_to_mongo()
    await ensure_admin_user()
    yield
    await close_mongo_connection()
    logger.info("Shutdown complete")


def create_app() -> FastAPI:
    settings = get_settings()

    # Docs only when DEBUG=true — never expose in production
    docs_enabled = settings.DEBUG and not settings.is_production

    app = FastAPI(
        title=settings.APP_NAME,
        version="1.0.0",
        docs_url="/api/docs" if docs_enabled else None,
        redoc_url=None,
        openapi_url="/api/openapi.json" if docs_enabled else None,
        root_path=settings.ROOT_PATH or "",
        lifespan=lifespan,
    )

    app.state.limiter = limiter
    app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
    app.add_middleware(SlowAPIMiddleware)

    # Order: last added = outermost. TrustedHost should be outer.
    app.add_middleware(SecurityHeadersMiddleware)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins_list,
        allow_credentials=True,
        allow_methods=["GET", "POST", "OPTIONS"],
        allow_headers=["Authorization", "Content-Type", "Accept"],
    )
    app.add_middleware(
        TrustedHostMiddleware,
        allowed_hosts=settings.allowed_hosts_list,
    )

    app.include_router(contact.router, prefix="/api")
    app.include_router(auth.router, prefix="/api")
    app.include_router(leads.router, prefix="/api")

    @app.get("/health")
    async def health() -> dict:
        return {"status": "ok"}

    @app.get("/api/health")
    async def api_health() -> dict:
        return {"status": "ok"}

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(_request: Request, exc: RequestValidationError):
        errors = []
        for err in exc.errors():
            loc = " → ".join(str(part) for part in err.get("loc", []) if part != "body")
            msg = err.get("msg", "Invalid value")
            errors.append(f"{loc}: {msg}" if loc else msg)
        return JSONResponse(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            content={"detail": errors[0] if len(errors) == 1 else errors},
        )

    @app.exception_handler(Exception)
    async def unhandled_exception_handler(_request: Request, exc: Exception):
        logger.exception("Unhandled error: %s", exc)
        detail = str(exc) if settings.DEBUG else "Internal server error"
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": detail},
        )

    return app


app = create_app()
