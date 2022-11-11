import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const baseURL = 'https://636b0820b10125b78fe9c65e.mockapi.io/contacts';

export const fetchAll = createAsyncThunk(
    'contacts/fetchAll', async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${baseURL}`)
            return response.data;
        } catch (event) {
            thunkAPI.rejectWithValue(event.message)
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact', async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post(`${baseURL}`, { name, number })
            return response.data;
        } catch (event) {
            thunkAPI.rejectWithValue(event.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact', async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`${baseURL}/${contactId}`)
            return response.data;
        } catch (event) {
            thunkAPI.rejectWithValue(event.message)
        }
    }
)