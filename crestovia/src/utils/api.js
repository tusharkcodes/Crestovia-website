import { API_URL } from '../config/env';

/**
 * Build a full API URL from a path.
 * Supports both:
 *   VITE_API_URL=http://localhost:8000        → /api/... paths
 *   VITE_API_URL=https://crestovia.in/api     → /... paths (or /api/... stripped)
 */
export function buildApiUrl(path) {
  let normalized = path.startsWith('/') ? path : `/${path}`;

  if (API_URL.endsWith('/api')) {
    if (normalized.startsWith('/api/')) {
      normalized = normalized.slice(4);
    } else if (normalized === '/api') {
      normalized = '';
    }
  } else if (!normalized.startsWith('/api/') && normalized !== '/api') {
    normalized = `/api${normalized}`;
  }

  return `${API_URL}${normalized}`;
}

function getToken() {
  return sessionStorage.getItem('crestovia_admin_token') || '';
}

export function setAdminToken(token) {
  if (token) sessionStorage.setItem('crestovia_admin_token', token);
  else sessionStorage.removeItem('crestovia_admin_token');
}

export function clearAdminToken() {
  sessionStorage.removeItem('crestovia_admin_token');
}

async function request(path, options = {}) {
  const headers = {
    Accept: 'application/json',
    ...(options.body ? { 'Content-Type': 'application/json' } : {}),
    ...options.headers,
  };

  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(buildApiUrl(path), {
    ...options,
    headers,
    credentials: 'include',
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail = data.detail;
    const message =
      typeof detail === 'string'
        ? detail
        : Array.isArray(detail)
          ? detail.map((d) => d.msg || d).join(', ')
          : data.message || 'Request failed';
    const error = new Error(message);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export function submitContact(payload) {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function adminLogin(email, password) {
  return request('/admin/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export function adminLogout() {
  return request('/admin/logout', { method: 'POST' });
}

export function adminMe() {
  return request('/admin/me');
}

export function fetchLeads({ page = 1, pageSize = 10, search = '' } = {}) {
  const params = new URLSearchParams({
    page: String(page),
    page_size: String(pageSize),
  });
  if (search.trim()) params.set('search', search.trim());
  return request(`/admin/leads?${params.toString()}`);
}

export function fetchLeadStats() {
  return request('/admin/leads/stats');
}
