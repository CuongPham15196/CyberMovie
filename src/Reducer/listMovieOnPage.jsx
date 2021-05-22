import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
  currentPage:0,
  totalPages:2,
};

export const listMovieOnPagesApi = createAsyncThunk(
  "listMoviePage/listMovieOnPagesApi",
  async ({soTrang,soPhanTuTrenTrang}, { rejectWithValue }) => {
    try {
      return await movieService.listMovieOnPagesApi(soTrang,soPhanTuTrenTrang);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const listMoviePage = createSlice({
  name: "listMoviePage",
  initialState,
  reducers: {},
  extraReducers: {
    [listMovieOnPagesApi.pending]: (state) => {
      state.loading = true;
    },
    [listMovieOnPagesApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data.items;
      state.currentPage=action.payload.data.currentPages;
      state.totalPages=action.payload.data.totalPages;
      state.err = null;
    },
    [listMovieOnPagesApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = listMoviePage.actions;
export default listMoviePage.reducer;
