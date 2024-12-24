import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './Task/TaskSlice'

export const store = configureStore({
  reducer: {
    task:taskReducer,

  },
})