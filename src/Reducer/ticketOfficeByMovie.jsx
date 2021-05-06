import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const ticketOfficeByMovieApi = createAsyncThunk(
  "ticketOfficeByMovie/ticketOffficeByMovieApi",
  async (maLichChieu, { rejectWithValue }) => {
    try {
      return await ticketService.ticketOfficeByMovieApi(maLichChieu);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const ticketOfficeByMovie = createSlice({
  name: "ticketOfficeByMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [ticketOfficeByMovieApi.pending]: (state) => {
      state.loading = true;
    },
    [ticketOfficeByMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [ticketOfficeByMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = ticketOfficeByMovie.actions;
export default ticketOfficeByMovie.reducer;
