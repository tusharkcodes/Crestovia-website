from typing import Optional

from fastapi import Depends, HTTPException, Request, status

from app.config import Settings, get_settings
from app.utils.security import safe_decode_token


def get_token_from_request(
    request: Request,
    settings: Settings = Depends(get_settings),
) -> str:
    auth_header = request.headers.get("Authorization")
    if auth_header and auth_header.lower().startswith("bearer "):
        return auth_header.split(" ", 1)[1].strip()

    cookie_value: Optional[str] = request.cookies.get(settings.COOKIE_NAME)
    if cookie_value:
        return cookie_value

    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Not authenticated",
        headers={"WWW-Authenticate": "Bearer"},
    )


async def get_current_admin(
    token: str = Depends(get_token_from_request),
) -> dict:
    payload = safe_decode_token(token)
    if not payload or payload.get("type") != "admin" or not payload.get("sub"):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return {"email": payload["sub"]}
