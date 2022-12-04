import { createSlice } from '@reduxjs/toolkit'
import { registation, login } from 'store/actions/auth.action'

const initialState = {
  register: null,
  login: null,
  loading: false,
  error: null,
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
      .addCase(registation.fulfilled, (state, action) => {
        state.loading = false
        state.register = action.payload
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.login = action.payload
      })
      .addCase(registation.rejected || login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
  },
})

export default AuthSlice.reducer
