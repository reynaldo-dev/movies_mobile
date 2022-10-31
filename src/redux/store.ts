import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './slices/movies.slice'
import movieDataReducer from './slices/movieDetails.slice'

import { useDispatch } from "react-redux"

export const store = configureStore({
  reducer: {
    movies : moviesReducer,
    data : movieDataReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch