# Crestovia — Production Deployment (Hostinger)

Domain: **https://crestovia.in**  
Frontend: Vite React build  
Backend: FastAPI on `127.0.0.1:8000` behind Nginx at `/api/`

---

## 1. Server prerequisites

- Ubuntu (or Hostinger VPS) with Nginx + SSL
- Python 3.11–3.13
- Node.js 20+ (for building the frontend)
- Git

```bash
sudo apt update
sudo apt install -y nginx python3-venv
```

---

## 2. Clone / deploy the repo

```bash
sudo mkdir -p /var/www/crestovia
sudo chown $USER:$USER /var/www/crestovia
cd /var/www/crestovia
git clone <your-repo-url> .
```

With GitHub Auto Deployment, point Hostinger (or your deploy hook) at this directory and run the build steps below after each pull.

---

## 3. Backend setup

```bash
cd /var/www/crestovia/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
nano .env   # fill real secrets — never commit this file
```

Required `.env` values:

| Variable | Production value |
|----------|------------------|
| `APP_ENV` | `production` |
| `DEBUG` | `false` |
| `MONGODB_URI` | Atlas connection string |
| `MONGODB_DB` | `crestovia` |
| `JWT_SECRET` | long random secret |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | your admin login |
| `CORS_ORIGINS` | `https://crestovia.in,https://www.crestovia.in` |
| `ALLOWED_HOSTS` | `crestovia.in,www.crestovia.in` |
| `COOKIE_SECURE` | `true` |

### Start with uvicorn (manual test)

```bash
cd /var/www/crestovia/backend
source .venv/bin/activate
uvicorn app.main:app --host 127.0.0.1 --port 8000 --proxy-headers --forwarded-allow-ips=127.0.0.1
```

### Install systemd service (recommended)

```bash
sudo cp /var/www/crestovia/backend/crestovia-api.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now crestovia-api
sudo systemctl status crestovia-api
```

---

## 4. Frontend build

```bash
cd /var/www/crestovia/crestovia
npm ci
npm run build
# Output: crestovia/dist
```

`crestovia/.env.production` already sets:

```
VITE_SITE_URL=https://crestovia.in
VITE_API_URL=https://crestovia.in/api
```

Serve the build from `/var/www/crestovia/dist` (symlink or copy):

```bash
# Option A: symlink
sudo ln -sfn /var/www/crestovia/crestovia/dist /var/www/crestovia/dist

# Option B: copy
sudo mkdir -p /var/www/crestovia/dist
sudo rsync -a --delete /var/www/crestovia/crestovia/dist/ /var/www/crestovia/dist/
```

---

## 5. Nginx + SSL

```bash
sudo cp /var/www/crestovia/backend/nginx.example.conf /etc/nginx/sites-available/crestovia
# Edit SSL cert paths if needed
sudo ln -sf /etc/nginx/sites-available/crestovia /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Obtain certificates (if not already):

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d crestovia.in -d www.crestovia.in
```

---

## 6. MongoDB Atlas

1. Allow the **server public IP** under Network Access  
2. Confirm `MONGODB_URI` and `MONGODB_DB` in `.env`  
3. Restart API: `sudo systemctl restart crestovia-api`

---

## 7. Verify

| Check | URL / command |
|-------|----------------|
| Site | https://crestovia.in |
| Health | https://crestovia.in/health → `{"status":"ok"}` |
| API health | https://crestovia.in/api/health → `{"status":"ok"}` |
| Contact form | Submit on `/contact` |
| Admin | https://crestovia.in/admin/log-in → dashboard shows lead |

```bash
curl -s https://crestovia.in/health
curl -s https://crestovia.in/api/health
sudo systemctl status crestovia-api
sudo journalctl -u crestovia-api -n 50 --no-pager
```

---

## 8. GitHub Auto Deployment (suggested hook)

After `git pull` on the server:

```bash
#!/usr/bin/env bash
set -euo pipefail
cd /var/www/crestovia
git pull origin main   # or your production branch

# Frontend
cd crestovia && npm ci && npm run build && cd ..
rsync -a --delete crestovia/dist/ /var/www/crestovia/dist/

# Backend deps (if requirements changed)
cd backend
source .venv/bin/activate
pip install -r requirements.txt
sudo systemctl restart crestovia-api
```

---

## Production checklist

- [ ] `backend/.env` exists on server only (not in Git)
- [ ] `DEBUG=false`, `APP_ENV=production`
- [ ] `CORS_ORIGINS` is exactly `https://crestovia.in,https://www.crestovia.in` (no `*`)
- [ ] `COOKIE_SECURE=true`
- [ ] Strong unique `JWT_SECRET` and `ADMIN_PASSWORD`
- [ ] Frontend built with `VITE_API_URL=https://crestovia.in/api`
- [ ] No hardcoded `localhost` / `127.0.0.1` in application source used at runtime
- [ ] Nginx proxies `/api/` → `127.0.0.1:8000` and redirects HTTP → HTTPS
- [ ] systemd service enabled and running
- [ ] Atlas IP allowlist includes the VPS
- [ ] `/health` returns `{"status":"ok"}`
- [ ] Contact form creates a lead visible on `/admin/dash-board`
- [ ] API docs (`/api/docs`) are **not** publicly available
