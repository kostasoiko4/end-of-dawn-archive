import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '@/integrations/supabase/client';

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

export const loginAdmin = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });
      if (error) throw error;
      return { email: data.user?.email || '' };
    } catch (err: any) {
      return rejectWithValue(err.message || 'Invalid credentials');
    }
  }
);

export const logoutAdmin = createAsyncThunk('auth/logout', async () => {
  await supabase.auth.signOut();
  return null;
});

// Check existing session on app load
export const checkSession = createAsyncThunk('auth/checkSession', async (_, { rejectWithValue }) => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      return { email: session.user.email || '' };
    }
    return null;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) { state.error = null; },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAdmin.pending, (state) => { state.loading = true; state.error = null; });
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(loginAdmin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(logoutAdmin.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = null;
    });
    builder.addCase(checkSession.fulfilled, (state, action) => {
      if (action.payload) {
        state.isAuthenticated = true;
        state.user = action.payload;
      }
    });
  },
});

export const { clearError } = authSlice.actions;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectAuthLoading = (state: { auth: AuthState }) => state.auth.loading;
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;
export const selectAuthUser = (state: { auth: AuthState }) => state.auth.user;

export default authSlice.reducer;
