from datetime import datetime, timezone
from math import ceil
from typing import Any, Optional

from app.database import get_db
from app.schemas.leads import ContactCreate, LeadOut


def _serialize_lead(doc: dict[str, Any]) -> LeadOut:
    return LeadOut(
        id=str(doc["_id"]),
        name=doc.get("name", ""),
        email=doc.get("email", ""),
        phone=doc.get("phone", ""),
        service=doc.get("service", ""),
        company=doc.get("company", "") or "",
        budget=doc.get("budget", "") or "",
        message=doc.get("message", ""),
        created_at=doc.get("created_at"),
    )


async def create_lead(payload: ContactCreate) -> str:
    db = get_db()
    doc = {
        "name": payload.name.strip(),
        "email": str(payload.email).strip().lower(),
        "phone": payload.phone.strip(),
        "service": payload.service.strip(),
        "company": (payload.company or "").strip(),
        "budget": (payload.budget or "").strip(),
        "message": payload.message.strip(),
        "created_at": datetime.now(timezone.utc),
    }
    result = await db.leads.insert_one(doc)
    return str(result.inserted_id)


async def list_leads(
    *,
    page: int = 1,
    page_size: int = 10,
    search: Optional[str] = None,
) -> dict[str, Any]:
    db = get_db()
    page = max(page, 1)
    page_size = min(max(page_size, 1), 100)

    query: dict[str, Any] = {}
    if search and search.strip():
        term = search.strip()
        query["$or"] = [
            {"name": {"$regex": term, "$options": "i"}},
            {"email": {"$regex": term, "$options": "i"}},
            {"phone": {"$regex": term, "$options": "i"}},
        ]

    total = await db.leads.count_documents(query)
    cursor = (
        db.leads.find(query)
        .sort("created_at", -1)
        .skip((page - 1) * page_size)
        .limit(page_size)
    )
    docs = await cursor.to_list(length=page_size)
    items = [_serialize_lead(doc) for doc in docs]

    return {
        "items": items,
        "total": total,
        "page": page,
        "page_size": page_size,
        "total_pages": ceil(total / page_size) if total else 0,
    }


async def get_lead_stats() -> dict[str, int]:
    db = get_db()
    total = await db.leads.count_documents({})
    since = datetime.now(timezone.utc).replace(hour=0, minute=0, second=0, microsecond=0)
    recent = await db.leads.count_documents({"created_at": {"$gte": since}})
    return {"total": total, "recent_today": recent}
