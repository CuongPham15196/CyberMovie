import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "Services";


const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const deleteMovieApi = createAsyncThunk(
  "deleteMovieApi",
  async ( maPhim, { rejectWithValue }) => {
    try {
      console.log(maPhim)
        return await movieService.deleteMoviePagesApi(maPhim);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const deleteMovie = createSlice({
  name: "deleteMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [deleteMovieApi.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [deleteMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {  } = deleteMovie.actions;
export default deleteMovie.reducer;
