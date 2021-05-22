import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const addUserApi = createAsyncThunk(
  "addUser/addUserApi",
  async (user, { rejectWithValue }) => {
    try {
      return await adminService.addUserApi(user);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const addUser = createSlice({
  name: "addUser",
  initialState,
  reducers: {
    addUserReset(state, action) {
      state.data = null;
    },
  },
  extraReducers: {
    [addUserApi.pending]: (state) => {
      state.loading = true;
    },
    [addUserApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [addUserApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const { addUserReset } = addUser.actions;
export default addUser.reducer;
