import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
