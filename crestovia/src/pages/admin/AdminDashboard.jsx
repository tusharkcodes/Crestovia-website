import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import {
  adminLogout,
  clearAdminToken,
  fetchLeadStats,
  fetchLeads,
} from '../../utils/api';

function formatDate(value) {
  if (!value) return '—';
  try {
    return new Date(value).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return String(value);
  }
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({ total: 0, recent_today: 0 });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const pageSize = 10;

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [list, leadStats] = await Promise.all([
        fetchLeads({ page, pageSize, search: query }),
        fetchLeadStats(),
      ]);
      setLeads(list.items || []);
      setTotal(list.total || 0);
      setTotalPages(list.total_pages || 0);
      setStats(leadStats);
    } catch (err) {
      if (err.status === 401) {
        clearAdminToken();
        navigate('/admin/log-in', { replace: true });
        return;
      }
      setError(err.message || 'Failed to load leads');
    } finally {
      setLoading(false);
    }
  }, [page, query, navigate]);

  useEffect(() => {
    load();
  }, [load]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(search.trim());
  };

  const handleLogout = async () => {
    try {
      await adminLogout();
    } catch {
      // ignore
    } finally {
      clearAdminToken();
      navigate('/admin/log-in', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-primary text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Logo size="md" link={false} />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Crestovia</p>
              <h1 className="text-lg font-extrabold sm:text-xl">Admin Dashboard</h1>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Total Leads</p>
            <p className="mt-2 text-3xl font-extrabold text-foreground">{stats.total ?? 0}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Recent Today</p>
            <p className="mt-2 text-3xl font-extrabold text-primary">{stats.recent_today ?? 0}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Showing</p>
            <p className="mt-2 text-3xl font-extrabold text-foreground">
              {total} <span className="text-base font-medium text-muted">results</span>
            </p>
          </div>
        </div>

        <form onSubmit={handleSearch} className="mb-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, or phone…"
            className="input-field flex-1"
          />
          <button
            type="submit"
            className="btn-primary px-6 py-3 shadow-md"
          >
            Search
          </button>
        </form>

        {error && (
          <p className="mb-4 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">{error}</p>
        )}

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border text-left text-sm">
              <thead className="bg-surface-alt text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Project Budget</th>
                  <th className="px-4 py-3 font-semibold">Message</th>
                  <th className="px-4 py-3 font-semibold">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-16 text-center text-muted">
                      Loading leads…
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-16 text-center">
                      <p className="text-base font-semibold text-foreground">No leads yet</p>
                      <p className="mt-1 text-sm text-muted">
                        Contact form submissions will appear here.
                      </p>
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="align-top hover:bg-surface-alt/80">
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-foreground">{lead.name}</td>
                      <td className="px-4 py-3 text-muted">
                        <a href={`mailto:${lead.email}`} className="hover:text-primary">
                          {lead.email}
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-muted">{lead.phone}</td>
                      <td className="px-4 py-3 text-muted">{lead.service}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-muted">{lead.budget || '—'}</td>
                      <td className="max-w-xs px-4 py-3 text-muted">
                        <p className="line-clamp-3">{lead.message}</p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-muted">
                        {formatDate(lead.created_at)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
              <p className="text-xs text-muted">
                Page {page} of {totalPages}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="rounded-lg border border-border px-3 py-1.5 text-sm disabled:opacity-40"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="rounded-lg border border-border px-3 py-1.5 text-sm disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
