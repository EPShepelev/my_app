/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts(state, action) {
      state = [...state, action.payload]
    },
  },
})

export const { setPosts } = postsSlice.actions

export default postsSlice.reducer
