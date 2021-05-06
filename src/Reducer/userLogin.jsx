import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { userService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const userLoginApi = createAsyncThunk(
  "userLogin/userLoginApi",
  async (user, { rejectWithValue }) => {
    try {
      return await userService.userLoginApi(user);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userLogin = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    userLogOut(state, action) {
      state.data = null;
      state.err = null;
      localStorage.clear("User");
    },
  },
  extraReducers: {
    [userLoginApi.pending]: (state) => {
      state.loading = true;
      state.data = null;
      state.err = null;
    },
    [userLoginApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [userLoginApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const { userLogOut } = userLogin.actions;
export default userLogin.reducer;
