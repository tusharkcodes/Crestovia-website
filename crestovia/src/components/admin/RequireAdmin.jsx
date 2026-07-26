import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { adminMe } from '../../utils/api';

export default function RequireAdmin({ children }) {
  const location = useLocation();
  const [status, setStatus] = useState('loading'); // loading | ok | fail

  useEffect(() => {
    let active = true;
    adminMe()
      .then(() => {
        if (active) setStatus('ok');
      })
      .catch(() => {
        if (active) setStatus('fail');
      });
    return () => {
      active = false;
    };
  }, []);

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary text-white/70">
        Checking session…
      </div>
    );
  }

  if (status === 'fail') {
    return <Navigate to="/admin/log-in" replace state={{ from: location.pathname }} />;
  }

  return children;
}
