import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = { query: "" };

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        filterContacts(state, action) {
            state.query = action.payload;
        }
    }
})

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;