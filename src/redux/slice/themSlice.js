import { createSlice } from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { darkMode: JSON.parse(localStorage.getItem('darkMode'))},
  reducers: {
    toggleDarkmode: (state) => {
      state.darkMode = !state.darkMode ;
      localStorage.setItem("darkMode",JSON.stringify(state.darkMode))
    },
  },
});

export const { toggleDarkmode } = themeSlice.actions;

export default themeSlice.reducer;
