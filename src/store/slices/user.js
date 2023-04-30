/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  name: null,
  email: null,
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id
      state.name = action.payload.id
      state.email = action.payload.id
      state.token = action.payload.id
    },
    removeUser(state) {
      state.id = null
      state.name = null
      state.email = null
      state.token = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
