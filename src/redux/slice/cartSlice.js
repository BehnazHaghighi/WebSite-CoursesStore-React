import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  totalQuantity: JSON.parse(localStorage.getItem('cartTotalQuantity')) || 0,
  totalPrice: JSON.parse(localStorage.getItem('cartTotalPrice')) || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const price = parseInt(newItem.price);
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

      // save localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('cartTotalQuantity', JSON.stringify(state.totalQuantity));
      localStorage.setItem('cartTotalPrice', JSON.stringify(state.totalPrice));
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        const price = existingItem.price;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= price;
        }
        state.totalQuantity--;
        state.totalPrice -= price;

        // update localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('cartTotalQuantity', JSON.stringify(state.totalQuantity));
        localStorage.setItem('cartTotalPrice', JSON.stringify(state.totalPrice));
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
