from pydantic import BaseModel, EmailStr, Field


class AdminLoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=6, max_length=128)


class AdminLoginResponse(BaseModel):
    success: bool = True
    message: str = "Logged in successfully"
    access_token: str
    token_type: str = "bearer"
    email: EmailStr


class AdminMeResponse(BaseModel):
    email: EmailStr
    authenticated: bool = True
