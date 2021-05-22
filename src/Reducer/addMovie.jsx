import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "Services";


const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const addMovieApi = createAsyncThunk(
  "addMovie/addMovieApi",
  async (movie, { rejectWithValue }) => {
    try {
      return await movieService.addMovieApi(movie);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const addMovie = createSlice({
  name: "addMovie",
  initialState,
  reducers: {
    addMovieReset(state, action) {
      state.data = null;
    },
  },
  extraReducers: {
    [addMovieApi.pending]: (state) => {
      state.loading = true;
    },
    [addMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [addMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const { addMovieReset } = addMovie.actions;
export default addMovie.reducer;
