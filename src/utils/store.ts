import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import app from 'modules/app.module'

export const store = configureStore({
  reducer: {
    app,
  },
})

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  Action<string>
>
