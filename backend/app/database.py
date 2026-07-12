import logging
from typing import Optional

from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from app.config import get_settings

logger = logging.getLogger(__name__)

_client: Optional[AsyncIOMotorClient] = None
_db: Optional[AsyncIOMotorDatabase] = None


async def connect_to_mongo() -> None:
    global _client, _db
    settings = get_settings()
    _client = AsyncIOMotorClient(settings.MONGODB_URI)
    _db = _client[settings.MONGODB_DB]
    # Verify connectivity early
    await _client.admin.command("ping")
    logger.info("Connected to MongoDB database '%s'", settings.MONGODB_DB)

    await _db.leads.create_index([("created_at", -1)])
    await _db.leads.create_index([("email", 1)])
    await _db.leads.create_index([("phone", 1)])
    await _db.leads.create_index([("name", 1)])
    await _db.admins.create_index("email", unique=True)


async def close_mongo_connection() -> None:
    global _client, _db
    if _client is not None:
        _client.close()
        logger.info("MongoDB connection closed")
    _client = None
    _db = None


def get_db() -> AsyncIOMotorDatabase:
    if _db is None:
        raise RuntimeError("Database is not initialized")
    return _db
