import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const server = "http://localhost:8090/api/v1";
const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  message: null,
};

// Actions.......
export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    console.log(email,password)
    try {
      const { data } = await axios.post(
        `${server}/LoginUser`,
        { email:email, password:password},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const userDetailSlice = createSlice({
  name: "userDetailSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
        state.message = null;
      });
  },
});

export default userDetailSlice.reducer;
