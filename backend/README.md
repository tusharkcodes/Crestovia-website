"""
Crestovia FastAPI backend

## Setup

Use Python 3.11–3.13 (recommended).

```bash
cd backend
python3.13 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with MongoDB URI + ADMIN_EMAIL + ADMIN_PASSWORD + JWT_SECRET
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API base: http://localhost:8000/api  
Docs (debug): http://localhost:8000/api/docs

## MongoDB Atlas

1. Create a database user and copy the connection string into `MONGODB_URI`
2. In Atlas → Network Access, allow your server IP (or `0.0.0.0/0` for testing)
3. Set `MONGODB_DB=crestovia`

## Admin

Hidden frontend routes (not linked in public nav):

- /admin/log-in
- /admin/dash-board

Credentials come from `.env` (`ADMIN_EMAIL`, `ADMIN_PASSWORD`).

## Nginx

See `nginx.example.conf` — proxy `/api/` to uvicorn, SPA for everything else including `/admin/*`.
"""
