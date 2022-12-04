import { createSlice } from '@reduxjs/toolkit'
import {
  createRecord,
  getRecords,
  getRecordById,
} from 'store/actions/record.action'

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
      .addCase(
        createRecord.pending || getRecords.pending || getRecordById.pending,
        (state) => {
          state.loading = true
          state.error = null
        },
      )
      .addCase(
        createRecord.fulfilled ||
          getRecords.fulfilled ||
          getRecordById.fulfilled,
        (state, action) => {
          state.loading = false
          state.data = action.payload
        },
      )
      .addCase(
        createRecord.rejected || getRecords.rejected || getRecordById.rejected,
        (state, action) => {
          state.loading = false
          state.error = action.payload
        },
      )
  },
})

export default recordSlice.reducer
