import { configureStore } from '@reduxjs/toolkit'
import  userReduer  from './userSlice'
export const store = configureStore({
  reducer: {
      user:userReduer
  },
})

