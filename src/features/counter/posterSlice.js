import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'
const initialState = {
  posts: [],
  error: null,
  loading: false,
};

export const posterSlice = createSlice({
  name: "poster",
  initialState,

  reducers: {
    postSuccess: (state, actions) => {
      state.posts = [...state.posts, actions.payload]
    },
    postLoading: (state, actions) => {
      state.loading = actions.payload
    },
    postError: (state, actions) => {
      state.error = actions.payload
    }
  },
});

export const getPosts = () => {
  return (dispatch) => {
    dispatch(postLoading(true))
    axios.get(url)
    .then((res) => {
      dispatch(postSuccess(res.data))
    })
    .catch((error) => {
      dispatch(postError(error.message))
    })
    .finally(() => {
      dispatch(postLoading(false))
    })
  }
}

export default posterSlice.reducer

export const {postLoading, postSuccess, postError} = posterSlice.actions