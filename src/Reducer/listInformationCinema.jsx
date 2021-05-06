import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cinemaService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const listInformationCinemaApi = createAsyncThunk(
  "listInformationCinema/listInformationCinemaApi",
  async (maHeThongRap, { rejectWithValue }) => {
    try {
      return await cinemaService.listInformationCinemaApi(maHeThongRap);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const listInformationCinema = createSlice({
  name: "listInformationCinema",
  initialState,
  reducers: {},
  extraReducers: {
    [listInformationCinemaApi.pending]: (state) => {
      state.loading = true;
    },
    [listInformationCinemaApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [listInformationCinemaApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = listInformationCinema.actions;
export default listInformationCinema.reducer;
