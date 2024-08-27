import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slice/themSlice";
import cartSlice from "./slice/cartSlice"; 

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    cart: cartSlice,
  },
});
