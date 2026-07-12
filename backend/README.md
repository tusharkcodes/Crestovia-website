# Crestovia FastAPI backend

## Setup

Use Python 3.11–3.13 (recommended).

```bash
cd backend
python3.13 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with MongoDB URI + ADMIN_EMAIL + ADMIN_PASSWORD + JWT_SECRET
```

### Local development

```bash
# In .env set APP_ENV=development DEBUG=true COOKIE_SECURE=false
# and CORS_ORIGINS including http://localhost:5173
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Production

```bash
uvicorn app.main:app --host 127.0.0.1 --port 8000 --proxy-headers --forwarded-allow-ips=127.0.0.1
```

Or use the systemd unit: `crestovia-api.service`.

API (production): https://crestovia.in/api/  
Health: https://crestovia.in/health  
Docs: disabled unless `DEBUG=true`

## MongoDB Atlas

1. Create a database user and copy the connection string into `MONGODB_URI`
2. In Atlas → Network Access, allow your server IP (or `0.0.0.0/0` for testing)
3. Set `MONGODB_DB=crestovia`

## Admin

Hidden frontend routes (not linked in public nav):

- /admin/log-in
- /admin/dash-board

Credentials come from `.env` (`ADMIN_EMAIL`, `ADMIN_PASSWORD`).

## Nginx / systemd

See:

- `nginx.example.conf` — full reverse proxy + SSL
- `crestovia-api.service` — systemd unit
- `../DEPLOYMENT.md` — Hostinger deployment steps
