import { combineReducers, configureStore } from '@reduxjs/toolkit'
import registerReducer from './reducers/auth.reducer'

export const store = configureStore({
  reducer: combineReducers({
    register: registerReducer,
  }),
})
