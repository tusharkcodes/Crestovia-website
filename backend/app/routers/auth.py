import logging

from fastapi import APIRouter, Depends, HTTPException, Request, Response, status

from app.config import Settings, get_settings
from app.dependencies import get_current_admin
from app.middleware.rate_limit import limiter
from app.schemas.auth import AdminLoginRequest, AdminLoginResponse, AdminMeResponse
from app.services.auth_service import authenticate_admin
from app.utils.security import create_access_token

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/admin", tags=["admin-auth"])


def _set_auth_cookie(response: Response, token: str, settings: Settings) -> None:
    response.set_cookie(
        key=settings.COOKIE_NAME,
        value=token,
        httponly=True,
        secure=settings.COOKIE_SECURE,
        samesite=settings.COOKIE_SAMESITE,
        max_age=settings.JWT_EXPIRE_MINUTES * 60,
        path="/",
    )


@router.post("/login", response_model=AdminLoginResponse)
@limiter.limit("8/minute")
async def admin_login(
    request: Request,
    payload: AdminLoginRequest,
    response: Response,
    settings: Settings = Depends(get_settings),
) -> AdminLoginResponse:
    email = str(payload.email).strip().lower()
    ok = await authenticate_admin(email, payload.password)
    if not ok:
        logger.warning("Failed admin login for %s", email)
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    token = create_access_token(subject=email)
    _set_auth_cookie(response, token, settings)
    logger.info("Admin logged in: %s", email)
    return AdminLoginResponse(access_token=token, email=email)


@router.get("/me", response_model=AdminMeResponse)
async def admin_me(admin: dict = Depends(get_current_admin)) -> AdminMeResponse:
    return AdminMeResponse(email=admin["email"])


@router.post("/logout")
async def admin_logout(
    response: Response,
    settings: Settings = Depends(get_settings),
    _admin: dict = Depends(get_current_admin),
) -> dict:
    response.delete_cookie(
        key=settings.COOKIE_NAME,
        path="/",
        samesite=settings.COOKIE_SAMESITE,
        secure=settings.COOKIE_SECURE,
    )
    return {"success": True, "message": "Logged out"}
