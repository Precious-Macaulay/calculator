import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "../features/displaySlice";

const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

export default store;
