import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const userSignUpApi = createAsyncThunk(
  "userSignUp/userSignUpApi",
  async (user, { rejectWithValue }) => {
    try {
      return await userService.userSignUpApi(user);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSignUp = createSlice({
  name: "userSignUp",
  initialState,
  reducers: {
    userSignUpReset(state, action) {
      state.data = null;
    },
  },
  extraReducers: {
    [userSignUpApi.pending]: (state) => {
      state.loading = true;
    },
    [userSignUpApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [userSignUpApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const { userSignUpReset } = userSignUp.actions;
export default userSignUp.reducer;
