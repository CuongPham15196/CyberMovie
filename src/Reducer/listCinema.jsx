import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cinemaService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const listCinemaApi = createAsyncThunk(
  "listCinema/listCinemaApi",
  async (params, { rejectWithValue }) => {
    try {
      return await cinemaService.listCinemaApi();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const listCinema = createSlice({
  name: "listCinema",
  initialState,
  reducers: {},
  extraReducers: {
    [listCinemaApi.pending]: (state) => {
      state.loading = true;
    },
    [listCinemaApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [listCinemaApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = listCinema.actions;
export default listCinema.reducer;
