import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from "./filtersSlice"
import { pizzaApi } from './pizzaApi'

export const resetStore = () => configureStore({
  reducer: {
    filters: filtersReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer
  },
  middleware: getDefault => getDefault().concat(
    pizzaApi.middleware
  ),
})

export const store = resetStore()
