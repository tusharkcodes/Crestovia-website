import { API_URL } from '../config/env';

/**
 * Build a full API URL from a path.
 * Examples:
 *   VITE_API_URL=http://localhost:8000          + /api/contacts → http://localhost:8000/api/contacts
 *   VITE_API_URL=https://api.crestovia.in       + /api/contacts → https://api.crestovia.in/api/contacts
 *   VITE_API_URL=https://api.crestovia.in/api    + /contacts    → https://api.crestovia.in/api/contacts
 */
export function buildApiUrl(path) {
  let normalized = path.startsWith('/') ? path : `/${path}`;

  // When base already ends with /api, avoid double /api in the path
  if (API_URL.endsWith('/api')) {
    if (normalized.startsWith('/api/')) {
      normalized = normalized.slice(4);
    } else if (normalized === '/api') {
      normalized = '';
    }
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

  const apiKey = import.meta.env.VITE_API_KEY;
  if (apiKey) headers['x-api-key'] = apiKey;

  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(buildApiUrl(path), {
    ...options,
    headers,
    credentials: 'include',
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail = data.detail ?? data.message ?? data.error;
    const message =
      typeof detail === 'string'
        ? detail
        : Array.isArray(detail)
          ? detail.map((d) => d.msg || d).join(', ')
          : 'Request failed';
    const error = new Error(message);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export function submitContact(payload) {
  return request('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function adminLogin(email, password) {
  return request('/api/admin/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export function adminLogout() {
  return request('/api/admin/logout', { method: 'POST' });
}

export function adminMe() {
  return request('/api/admin/me');
}

export function fetchLeads({ page = 1, pageSize = 10, search = '' } = {}) {
  const params = new URLSearchParams({
    page: String(page),
    page_size: String(pageSize),
  });
  if (search.trim()) params.set('search', search.trim());
  return request(`/api/admin/leads?${params.toString()}`);
}

export function fetchLeadStats() {
  return request('/api/admin/leads/stats');
}
