from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=8, max_length=30)
    service: str = Field(..., min_length=1, max_length=120)
    message: str = Field(..., min_length=20, max_length=5000)
    company: Optional[str] = Field(default="", max_length=160)
    budget: Optional[str] = Field(default="", max_length=80)


class ContactResponse(BaseModel):
    success: bool = True
    message: str = "Thank you! We'll contact you soon."


class LeadOut(BaseModel):
    id: str
    name: str
    email: EmailStr
    phone: str
    service: str
    company: str = ""
    budget: str = ""
    message: str
    created_at: datetime


class LeadsListResponse(BaseModel):
    items: list[LeadOut]
    total: int
    page: int
    page_size: int
    total_pages: int
