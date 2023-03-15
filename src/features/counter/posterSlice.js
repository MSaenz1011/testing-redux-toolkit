import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
  error: null,
  loading: false,
};

export const posterSlice = createSlice({
  name: "poster",
  initialState,

  reducers: {
    postSuccess: (state) => {},
  },
});
