import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const price = parseInt(newItem.price); // تبدیل قیمت به عدد
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: price,
          quantity: 1,
          totalPrice: price,
        });
      }
      state.totalQuantity++;
      state.totalPrice += price;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        const price = existingItem.price; // قیمت به عنوان عدد است
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= price;
        }
        state.totalQuantity--;
        state.totalPrice -= price;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
