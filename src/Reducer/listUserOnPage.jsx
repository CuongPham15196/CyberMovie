import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
  currentPage:0,
  totalPages:2,
};

export const listUserOnPageApi = createAsyncThunk(
  "listUserPage/listUserOnPageApi",
  async ({soTrang,soPhanTuTrenTrang,searchValue}, { rejectWithValue }) => {
    try {
      return await userService.listUserOnPageApi(soTrang,soPhanTuTrenTrang,searchValue);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const listUserOnPage = createSlice({
  name: "listUserOnPage",
  initialState,
  reducers: {},
  extraReducers: {
    [listUserOnPageApi.pending]: (state) => {
      state.loading = true;
    },
    [listUserOnPageApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data.items;
      state.currentPage=action.payload.data.currentPages;
      state.totalPages=action.payload.data.totalPages;
      state.err = null;
    },
    [listUserOnPageApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = listUserOnPage.actions;
export default listUserOnPage.reducer;
