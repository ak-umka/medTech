import { createSlice } from '@reduxjs/toolkit'
import { postRecord } from 'store/actions/record.action'

const initialState = {
  data: null,
  loading: false,
  error: null,
}

const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postRecord.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(postRecord.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(postRecord.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default recordSlice.reducer
