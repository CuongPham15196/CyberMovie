import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "Services";


const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const updateUserApi = createAsyncThunk(
  "updateUserApi",
  async ( user, { rejectWithValue }) => {
    try {
      return await userService.updateUserApi(user);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const updateUser = createSlice({
  name: "updateUserApi",
  initialState,
  reducers: {},
  extraReducers: {
    [updateUserApi.pending]: (state, action) => {
      state.loading = true;
    },
    [updateUserApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [updateUserApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {  } = updateUser.actions;
export default updateUser.reducer;
