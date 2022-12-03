import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v0'

export const registation = createAsyncThunk(
  'auth/data',
  async (payload, thunkApi) => {
    try {
      const { data } = axios.post(`${baseUrl}/signup`, payload)
      return data
    } catch (e) {
      throw thunkApi.rejectWithValue('Что-то пошло не так')
    }
  },
)

export const login = createAsyncThunk(
  'auth/data',
  async (payload, thunkApi) => {
    try {
      const { data } = axios.post(`${baseUrl}/signin`, payload)
      return data
    } catch (e) {
      throw thunkApi.rejectWithValue('Что-то пошло не так')
    }
  },
)
