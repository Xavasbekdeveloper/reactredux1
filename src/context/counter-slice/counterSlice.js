import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, { payload }) {
      state.count += payload;
    },
    decrement(state, {payload}){
      state.count -= payload;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export const { increment, reset, decrement } = counterSlice.actions;

export default counterSlice.reducer;
