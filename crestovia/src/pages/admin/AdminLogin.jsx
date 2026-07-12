import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { adminLogin, adminMe, setAdminToken } from '../../utils/api';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [alreadyAuthed, setAlreadyAuthed] = useState(false);

  useEffect(() => {
    let active = true;
    adminMe()
      .then(() => {
        if (active) setAlreadyAuthed(true);
      })
      .catch(() => {})
      .finally(() => {
        if (active) setChecking(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await adminLogin(email.trim(), password);
      setAdminToken(data.access_token);
      navigate('/admin/dash-board', { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy text-white/70">
        Loading…
      </div>
    );
  }

  if (alreadyAuthed) {
    return <Navigate to="/admin/dash-board" replace />;
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-[#0c1f3d] px-4 py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(37,99,235,0.3),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(212,175,55,0.12),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">Crestovia</p>
          <h1 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Admin Login</h1>
          <p className="mt-2 text-sm text-white/60">Sign in to manage contact leads</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label htmlFor="admin-email" className="mb-1.5 block text-sm font-medium text-white/80">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-primary"
              placeholder="admin@crestovia.in"
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="mb-1.5 block text-sm font-medium text-white/80">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-primary"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gradient-to-r from-primary to-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
