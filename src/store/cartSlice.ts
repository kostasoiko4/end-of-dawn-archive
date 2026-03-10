import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  name: string;
  price: string;
  image: string;
  link: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  hasOpenedOnce: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  hasOpenedOnce: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, 'quantity'>>) {
      const existing = state.items.find(i => i.name === action.payload.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      if (!state.hasOpenedOnce) {
        state.isOpen = true;
        state.hasOpenedOnce = true;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i.name !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ name: string; quantity: number }>) {
      if (action.payload.quantity <= 0) {
        state.items = state.items.filter(i => i.name !== action.payload.name);
        return;
      }
      const item = state.items.find(i => i.name === action.payload.name);
      if (item) item.quantity = action.payload.quantity;
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    clearCart(state) {
      state.items = [];
      state.hasOpenedOnce = false;
    },
  },
});

export const { addItem, removeItem, updateQuantity, openCart, closeCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartIsOpen = (state: { cart: CartState }) => state.cart.isOpen;
export const selectTotalItems = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
export const selectTotalPrice = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity * parseFloat(i.price.replace('€', '')), 0);

export default cartSlice.reducer;
