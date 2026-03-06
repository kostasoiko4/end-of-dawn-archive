import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';
import logo from '@/assets/band/logo.png';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — will connect to auth backend later
    setError('Admin authentication not yet configured. Please contact the developer.');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="card-gothic p-8 w-full max-w-sm relative z-10">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="End of Dawn" className="h-16 w-auto mb-4 opacity-80" />
          <div className="flex items-center gap-2 text-primary">
            <Lock className="w-4 h-4" />
            <h1 className="font-cinzel text-sm tracking-[0.2em] uppercase">Admin Access</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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

          <button type="submit" className="btn-gothic w-full">
            Sign In
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
