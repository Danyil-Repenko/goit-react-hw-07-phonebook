import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchAll, addContacto, deleteContacto } from "./operations";

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
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(task => task.id === action.payload);
            state.items.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAll.pending, (state) => {
                handlePending(state)
            })
            .addCase(fetchAll.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.itmes = action.payload;
            })
            .addCase(fetchAll.rejected, (state, action) => {
                handleRejected(state, action);
            }),
            builder
                .addCase(addContacto.pending, (state) => {
                    handlePending(state);
                })
                .addCase(addContacto.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items.push(action.payload);
                })
                .addCase(addContacto.rejected, (state, action) => {
                    handleRejected(state, action);
                }),
            builder
                .addCase(deleteContacto.pending, (state) => {
                    handlePending(state);
                })
                .addCase(deleteContacto.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    const index = state.items.findIndex(
                        task => task.id === action.payload.id
                    );
                    state.items.splice(index, 1);
                })
                .addCase(deleteContacto.rejected, (state, action) => {
                    handleRejected(state, action);
                })
    },
})

const persistConfig = {
    key: 'contacts',
    storage,
}

export const contactReducer = persistReducer(persistConfig, contactSlice.reducer)

export const { addContact, deleteContact } = contactSlice.actions;