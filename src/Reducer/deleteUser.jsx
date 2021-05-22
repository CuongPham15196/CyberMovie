import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "Services";


const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const deleteUserApi = createAsyncThunk(
  "deleteUserApi",
  async ( user, { rejectWithValue }) => {
    try {
      return await userService.deleteUserApi(user);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const deleteUser = createSlice({
  name: "deleteUserApi",
  initialState,
  reducers: {},
  extraReducers: {
    [deleteUserApi.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUserApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [deleteUserApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {  } = deleteUser.actions;
export default deleteUser.reducer;
