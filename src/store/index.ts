import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import contentReducer from './contentSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    content: contentReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
