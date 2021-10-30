import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./store/auth"

export default configureStore({
  reducer: {
    auth: authReducer,
  },
})