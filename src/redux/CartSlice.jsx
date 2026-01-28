import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addToCart(state, action) {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (!existing) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalQuantity++;
      }
    },
    increaseQty(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      item.quantity++;
      state.totalQuantity++;
    },
    decreaseQty(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
      }
    },
    removeItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  }
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem
} = cartSlice.actions;

export default cartSlice.reducer;
