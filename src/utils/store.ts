import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import app from 'modules/app.module'

const store = configureStore({
  reducer: {
    app,
  },
  middleware: process.env.NODE_ENV !== 'production' ? [logger] : [],
})

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  Action<string>
>

export default store
