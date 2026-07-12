from typing import Optional

from fastapi import APIRouter, Depends, Query

from app.dependencies import get_current_admin
from app.schemas.leads import LeadsListResponse
from app.services import leads_service

router = APIRouter(prefix="/admin", tags=["admin-leads"])


@router.get("/leads", response_model=LeadsListResponse)
async def get_leads(
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=100),
    search: Optional[str] = Query(None, max_length=120),
    _admin: dict = Depends(get_current_admin),
) -> LeadsListResponse:
    data = await leads_service.list_leads(page=page, page_size=page_size, search=search)
    return LeadsListResponse(**data)


@router.get("/leads/stats")
async def get_leads_stats(_admin: dict = Depends(get_current_admin)) -> dict:
    return await leads_service.get_lead_stats()
