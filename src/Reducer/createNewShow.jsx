import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketService } from "Services";


const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const createShowApi = createAsyncThunk(
  "createShow/createShowApi",
  async (data, { rejectWithValue }) => {
    try {
      return await ticketService.createShowApi(data);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const createShow = createSlice({
  name: "createShow",
  initialState,
  reducers: {
    createShowReset(state, action) {
      state.data = null;
    },
  },
  extraReducers: {
    [createShowApi.pending]: (state) => {
      state.loading = true;
    },
    [createShowApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [createShowApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const { createShowReset } = createShow.actions;
export default createShow.reducer;
