import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { State } from 'utils/store'

// ------------------------------------
// Types
// ------------------------------------

interface AppState {
  loggedIn: boolean
}

// ------------------------------------
// State
// ------------------------------------

const initialState: AppState = {
  loggedIn: false,
}

// ------------------------------------
// Actions
// ------------------------------------

function setLoggedIn(state: AppState, action: PayloadAction<boolean>) {
  state.loggedIn = action.payload
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn,
  },
})

// ------------------------------------
// Exports
// ------------------------------------

export const { actions } = slice
export const selector = (state: State) => state.app
export default slice.reducer
