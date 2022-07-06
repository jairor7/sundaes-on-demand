import { configureStore } from "@reduxjs/toolkit";
import { optionsReducer } from "./reducers/entry/optionsReducer";

export const store = configureStore({
  reducer: {
    optionsReducer,
  },
  devTools: true,
});
