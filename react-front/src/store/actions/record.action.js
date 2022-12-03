import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const postRecord = createAsyncThunk('record/data', async (payload) => {
  const { data } = await axios.post(`/`, payload)
  return data
})
