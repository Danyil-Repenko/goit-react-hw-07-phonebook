import { createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from 'axios';


const baseURL = 'https://636b0820b10125b78fe9c65e.mockapi.io/';

export const fetchAll = createAsyncThunk(
    'contacts/fetchAll', async (_, thunkAPI) => {
        try {
            const response = await Axios.get(`${baseURL}contacts`)
            return response.data;
        } catch (event) {
            thunkAPI.rejectWithValue(event.message)
        }
    }
)

export const addContacto = createAsyncThunk(
    'contacts/addContact', async ({ name, number }, thunkAPI) => {
        try {
            const response = await Axios.post(`${baseURL}contacts`, { name, number })
            return response.data;
        } catch (event) {
            thunkAPI.rejectWithValue(event.message)
        }
    }
)

export const deleteContacto = createAsyncThunk(
    'contacts/deleteContact', async (contactId, thunkAPI) => {
        try {
            const response = await Axios.get(`${baseURL}contacts/${contactId}`)
            return response.data;
        } catch (event) {
            thunkAPI.rejectWithValue(event.message)
        }
    }
)