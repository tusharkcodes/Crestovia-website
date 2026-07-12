import logging
from datetime import datetime, timezone

from app.config import get_settings
from app.database import get_db
from app.utils.security import hash_password, verify_password

logger = logging.getLogger(__name__)


async def ensure_admin_user() -> None:
    """Ensure the single admin account from env exists / password stays in sync."""
    settings = get_settings()
    db = get_db()
    email = settings.ADMIN_EMAIL.strip().lower()
    existing = await db.admins.find_one({"email": email})

    password_hash = hash_password(settings.ADMIN_PASSWORD)

    if existing is None:
        await db.admins.insert_one(
            {
                "email": email,
                "password_hash": password_hash,
                "created_at": datetime.now(timezone.utc),
                "updated_at": datetime.now(timezone.utc),
            }
        )
        logger.info("Admin user created for %s", email)
        return

    # Keep hash aligned with current .env password (single-admin setup)
    if not verify_password(settings.ADMIN_PASSWORD, existing.get("password_hash", "")):
        await db.admins.update_one(
            {"email": email},
            {
                "$set": {
                    "password_hash": password_hash,
                    "updated_at": datetime.now(timezone.utc),
                }
            },
        )
        logger.info("Admin password updated from environment for %s", email)


async def authenticate_admin(email: str, password: str) -> bool:
    db = get_db()
    admin = await db.admins.find_one({"email": email.strip().lower()})
    if not admin:
        return False
    return verify_password(password, admin.get("password_hash", ""))
