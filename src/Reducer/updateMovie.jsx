import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "Services";


const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const updateMovieApi = createAsyncThunk(
  "updateMovieApi",
  async ( user, { rejectWithValue }) => {
    try {
      console.log(user)
      return await movieService.updateMovieApi(user);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const updateMovie = createSlice({
  name: "updateMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [updateMovieApi.pending]: (state, action) => {
      state.loading = true;
    },
    [updateMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [updateMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {  } = updateMovie.actions;
export default updateMovie.reducer;
