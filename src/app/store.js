import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// import posterReducer from ""
// import textReducer from ""

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //poster: posterReducer,
    //text: textReducer
  },
});
