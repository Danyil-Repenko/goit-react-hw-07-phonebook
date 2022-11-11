import { createSlice } from "@reduxjs/toolkit";
import { fetchAll, addContact, deleteContact } from "./operations";

const contactsInitialState =
{
    items: [],
    isLoading: false,
    error: null
}

const handlePending = (state) => {
    state.isLoading = true;
}
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAll.pending, (state) => {
                handlePending(state)
            })
            .addCase(fetchAll.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchAll.rejected, (state, action) => {
                handleRejected(state, action);
            })
            .addCase(addContact.pending, (state) => {
                handlePending(state);
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                handleRejected(state, action);
            })
            .addCase(deleteContact.pending, (state) => {
                handlePending(state);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(
                    task => task.id === action.payload.id
                );
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                handleRejected(state, action);
            })
    },
})

export const contactReducer = contactSlice.reducer