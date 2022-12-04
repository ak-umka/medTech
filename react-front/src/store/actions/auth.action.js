import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v0'

export const registation = createAsyncThunk(
  'auth/register',
  async (payload) => {
    const { data } = await axios.post(`${baseUrl}/signup`, payload)
    return data
  },
)

export const login = createAsyncThunk('auth/login', async (payload) => {
  const { data } = await axios.post(`${baseUrl}/signin`, payload)
  return data
})
