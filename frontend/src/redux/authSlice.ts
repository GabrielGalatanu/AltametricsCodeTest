import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { AuthState } from "../utils/types";

const initialState: AuthState = {
  token: localStorage.getItem("jwtToken") || null,
  isLoggedIn: localStorage.getItem("jwtToken") ? true : false,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    loginData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        loginData
      );

      const token = response.data.token;
      localStorage.setItem("jwtToken", token);

      return token;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }

      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("jwtToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as AuthState["error"];
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
