import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userlogin = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        data
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue("نام کاربری یا رمز عبور اشتباه است.");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || "",
    username: localStorage.getItem("username") || "",
    lastName: "",
    error: null,
  },
  reducers: {
    token: (state, action) => {
      state.token = action.payload.token;
    },
    logOut: (state) => {
      state.token = "";
      state.username = "";
      state.lastName = "";
      localStorage.removeItem("token")
      localStorage.removeItem("cartItems")
      localStorage.removeItem("cartTotalQuantity")
      localStorage.removeItem("cartTotalPrice")
      localStorage.removeItem("username")
      localStorage.removeItem("darkMode")

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userlogin.fulfilled, (state, action) => {
        const { token, username, lastName } = action.payload;
        state.token = token;
        state.username = username;
        state.lastName = lastName;
        state.error = null;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("username", action.payload.username);
      })
      .addCase(userlogin.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { token, logOut } = authSlice.actions;
export default authSlice.reducer;
