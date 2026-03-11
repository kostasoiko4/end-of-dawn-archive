import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

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

// Placeholder login — will be replaced with real API auth later
export const loginAdmin = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      // const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
      // if (!res.ok) throw new Error('Invalid credentials');
      // return await res.json();

      // Temporary hardcoded admin credentials
      if (credentials.email === 'admin' && credentials.password === 'admin') {
        return { email: 'admin' };
      }
      throw new Error('Invalid credentials');
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const logoutAdmin = createAsyncThunk('auth/logout', async () => {
  // TODO: await fetch('/api/auth/logout', { method: 'POST' });
  return null;
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
  },
});

export const { clearError } = authSlice.actions;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectAuthLoading = (state: { auth: AuthState }) => state.auth.loading;
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;
export const selectAuthUser = (state: { auth: AuthState }) => state.auth.user;

export default authSlice.reducer;
