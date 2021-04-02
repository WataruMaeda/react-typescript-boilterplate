import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch, State } from 'utils/store'

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
// Slices
// -----------------------------------

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn: (state: AppState, action: PayloadAction<boolean>) => ({
      ...state,
      loggedIn: action.payload,
    }),
  },
})

// ------------------------------------
// Actions
// -----------------------------------

const setLoginAsync = () => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(slice.actions.setLoggedIn(true))
  }, 1000)
}

// ------------------------------------
// Exports
// ------------------------------------

export const actions = { ...slice.actions, setLoginAsync }
export const selector = (state: State) => state.app

export default slice.reducer
