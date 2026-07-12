import logging

from fastapi import APIRouter, HTTPException, Request, status

from app.middleware.rate_limit import limiter
from app.schemas.leads import ContactCreate, ContactResponse
from app.services import leads_service

logger = logging.getLogger(__name__)
router = APIRouter(tags=["contact"])


@router.post("/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
@limiter.limit("20/minute")
async def submit_contact(request: Request, payload: ContactCreate) -> ContactResponse:
    try:
        lead_id = await leads_service.create_lead(payload)
        logger.info("Lead created id=%s email=%s", lead_id, payload.email)
        return ContactResponse()
    except Exception:
        logger.exception("Failed to create lead")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Unable to submit your message right now. Please try again.",
        ) from None
