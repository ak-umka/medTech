import { createSlice } from '@reduxjs/toolkit'
import { registation } from 'store/actions/auth.action'

const initialState = {
  data: null,
  loading: false,
  error: null,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registation.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registation.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(registation.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default AuthSlice.reducer
