import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v0'

export const createRecord = createAsyncThunk('record/data', async (payload) => {
  const { data } = await axios.post(`${baseUrl}/createInspection`, payload)
  return data
})

export const getRecords = createAsyncThunk('record/data', async (payload) => {
  const { data } = await axios.get(`${baseUrl}/inspection`, payload)
  return data
})

export const getRecordById = createAsyncThunk(
  'record/data',
  async (id, payload) => {
    const { data } = await axios.get(`${baseUrl}/inspection/${id}`, payload)
    return data
  },
)
