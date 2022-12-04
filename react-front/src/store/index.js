import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.reducer'
import recordReducer from './reducers/record.reducer'

export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    record: recordReducer,
  }),
})
