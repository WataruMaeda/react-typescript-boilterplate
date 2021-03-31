import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  loggedIn: boolean
}

const initialState: AppState = {
  loggedIn: false,
}

// slice
const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn(state, { payload }) {
      state.loggedIn = payload
    },
  },
})

export const { actions } = slice
export const { setLoggedIn } = slice.actions

export default slice.reducer
