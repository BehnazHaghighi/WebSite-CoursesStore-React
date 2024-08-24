import { configureStore } from '@reduxjs/toolkit';
import themSlice from './slice/themSlice';

export const store = configureStore({
  reducer: {
    theme: themSlice,
  },
});
