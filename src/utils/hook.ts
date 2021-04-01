import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux'
import type { State, Dispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => useAppDispatch<Dispatch>()
export const useSelector: TypedUseSelectorHook<State> = useAppSelector
