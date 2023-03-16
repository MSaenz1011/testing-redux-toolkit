import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import posterReducer from "../features/counter/posterSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    poster: posterReducer,
    
  },
});
