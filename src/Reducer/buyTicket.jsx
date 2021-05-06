import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
  dataSeat: [],
};

export const buyTicketApi = createAsyncThunk(
  "buyTicket/buyTicketApi",
  async ({ data, accessToken }, { rejectWithValue }) => {
    try {
      return await ticketService.buyTicketApi({ data, accessToken });
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const buyTicket = createSlice({
  name: "buyTicket",
  initialState,
  reducers: {
    chooseSeat: (state, action) => {
      const index = state.dataSeat.findIndex((seat) => {
        return seat.maGhe === action.payload.maGhe;
      });
      if (index !== -1) state.dataSeat.splice(index, 1);
      else state.dataSeat = [...state.dataSeat, action.payload];
    },
    resetTicket: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = null;
      state.dataSeat = [];
    },
  },
  extraReducers: {
    [buyTicketApi.pending]: (state, action) => {
      state.loading = true;
    },
    [buyTicketApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [buyTicketApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const { chooseSeat, resetTicket } = buyTicket.actions;
export default buyTicket.reducer;
