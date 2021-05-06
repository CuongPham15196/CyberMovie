import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const buyFood = createSlice({
  name: "buyFood",
  initialState,
  reducers: {
    handleFood: (state, action) => {
      const index = state.data.findIndex((item) => {
        return item.combo === action.payload.combo;
      });
      if (index !== -1) {
        if (action.payload.status) state.data[index].number += 1;
        else {
          if (state.data[index].number >= 1) state.data[index].number -= 1;
          if (state.data[index].number === 0) state.data.splice(index, 1);
        }
      } else {
        const newFood = { ...action.payload, number: 1 };
        state.data = [...state.data, newFood];
      }
    },
    resetFood: (state, action) => {
      state.data = [];
    },
  },
});

export const { handleFood, resetFood } = buyFood.actions;
export default buyFood.reducer;
