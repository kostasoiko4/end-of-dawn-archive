import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/band/logo.svg';
import { loginAdmin, selectIsAuthenticated, selectAuthLoading, selectAuthError, clearError } from '@/store/authSlice';
import type { AppDispatch } from '@/store';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (isAuthenticated) navigate('/admin/dashboard');
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearError());
    dispatch(loginAdmin({ email, password }));
  };

  // admin@endofdawn.com / admin123!

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="card-gothic p-8 w-full max-w-sm relative z-10">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="End of Dawn" className="h-16 w-auto mb-4 opacity-80"  />
          <div className="flex items-center gap-2 text-primary">
            <Lock className="w-4 h-4" />
            <h1 className="font-cinzel text-sm tracking-[0.2em] uppercase">Admin Access</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username"
            className="input-gothic"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-gothic pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-silver transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {error && <p className="text-destructive text-sm font-cormorant">{error}</p>}

          <button type="submit" disabled={loading} className="btn-gothic w-full disabled:opacity-50">
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <button onClick={() => navigate('/')} className="mt-6 text-muted-foreground text-xs font-cinzel tracking-wider hover:text-silver transition-colors w-full text-center">
          ← Back to site
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
