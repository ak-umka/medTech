import { createSlice } from '@reduxjs/toolkit'
import { registation, login } from 'store/actions/auth.action'

const initialState = {
  data: null,
  loading: false,
  error: null,
}

function isRejectedAction(action) {
  return action.type.endsWith('rejected')
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registation.pending || login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registation.fulfilled || login.pending, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default AuthSlice.reducer
