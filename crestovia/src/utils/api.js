const API_BASE = '';

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

  const response = await fetch(`${API_BASE}${path}`, {
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
  return request('/api/contact', {
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
