import { createSlice } from "@reduxjs/toolkit";

const cartSystem = createSlice({
  name: "cart",
  initialState: { data: [] },
  reducers: {
    addtocart(state, action) {
      const existing = state.data.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    removetocart(state, action) {
      state.data = state.data.filter(item => item.id !== action.payload.id);
    },
    increaseQuantity(state, action) {
      const item = state.data.find(item => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.data.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addtocart, removetocart, increaseQuantity, decreaseQuantity } = cartSystem.actions;

export default cartSystem.reducer;
