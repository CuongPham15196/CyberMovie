import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const showTimesMovieApi = createAsyncThunk(
  "showTimesMovie/showTimesMovieApi",
  async (id, { rejectWithValue }) => {
    try {
      return await movieService.showTimesMovieApi(id);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const showTimesMovie = createSlice({
  name: "showTimesMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [showTimesMovieApi.pending]: (state) => {
      state.loading = true;
    },
    [showTimesMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [showTimesMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = showTimesMovie.actions;
export default showTimesMovie.reducer;
