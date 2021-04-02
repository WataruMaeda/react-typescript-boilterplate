import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import app from 'modules/app.module'

const store = configureStore({
  reducer: {
    app,
  },
  middleware:
    process.env.NODE_ENV === 'production'
      ? [...getDefaultMiddleware()]
      : [...getDefaultMiddleware(), logger],
})

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch | any
export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  Action<string>
>

export default store
