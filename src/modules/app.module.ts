import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { State } from 'utils/store'

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
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload
    },
  },
})

export const { actions } = slice
export const selector = (state: State) => state.app

export default slice.reducer
