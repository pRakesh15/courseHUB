import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const server="http://localhost:8090/api/v1"


export const userLogin = createAsyncThunk(
  "userLogin",
  async (email, password) => {
    const { data } = await axios.post(
      `${server}/LoginUser`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return data;
  }
);

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  message: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.isLoading == true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});


export default userSlice.reducer;
