from functools import lru_cache
from pathlib import Path
from typing import List

from pydantic_settings import BaseSettings, SettingsConfigDict

ROOT_DIR = Path(__file__).resolve().parent.parent


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=str(ROOT_DIR / ".env"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    APP_NAME: str = "Crestovia API"
    APP_ENV: str = "production"
    DEBUG: bool = False

    # Optional: set to "/api" when OpenAPI/docs must know the public mount path
    ROOT_PATH: str = ""

    MONGODB_URI: str
    MONGODB_DB: str = "crestovia"

    JWT_SECRET: str
    JWT_ALGORITHM: str = "HS256"
    JWT_EXPIRE_MINUTES: int = 480

    ADMIN_EMAIL: str
    ADMIN_PASSWORD: str

    # Comma-separated. Never use "*" in production.
    CORS_ORIGINS: str = "https://crestovia.in,https://www.crestovia.in"

    # Comma-separated hosts for TrustedHostMiddleware
    ALLOWED_HOSTS: str = "crestovia.in,www.crestovia.in"

    COOKIE_NAME: str = "crestovia_admin_token"
    COOKIE_SECURE: bool = True
    COOKIE_SAMESITE: str = "lax"

    @property
    def is_production(self) -> bool:
        return self.APP_ENV.lower() == "production" and not self.DEBUG

    @property
    def cors_origins_list(self) -> List[str]:
        origins = [origin.strip() for origin in self.CORS_ORIGINS.split(",") if origin.strip()]
        if self.is_production and "*" in origins:
            raise ValueError("CORS_ORIGINS must not include '*' in production")
        return origins

    @property
    def allowed_hosts_list(self) -> List[str]:
        hosts = [host.strip() for host in self.ALLOWED_HOSTS.split(",") if host.strip()]
        if not self.is_production:
            for local in ("localhost", "127.0.0.1", "testserver"):
                if local not in hosts:
                    hosts.append(local)
        return hosts


@lru_cache
def get_settings() -> Settings:
    return Settings()
