import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cinemaService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const listMovieShowTimeByCinemaApi = createAsyncThunk(
  "listMovieShowTimeByCinema/listMovieShowTimeByCinemaApi",
  async (maHeThongRap, { rejectWithValue }) => {
    try {
      if (maHeThongRap) return await cinemaService.listMovieShowTimeByCinemaApi(maHeThongRap);
      return await cinemaService.listMovieShowTimeByCinemaApi();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const listMovieShowTimeByCinema = createSlice({
  name: "listMovieShowTimeByCinema",
  initialState,
  reducers: {},
  extraReducers: {
    [listMovieShowTimeByCinemaApi.pending]: (state) => {
      state.loading = true;
    },
    [listMovieShowTimeByCinemaApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [listMovieShowTimeByCinemaApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = listMovieShowTimeByCinema.actions;
export default listMovieShowTimeByCinema.reducer;
