import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsInitialState = { contacts: [] }

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
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
            const index = state.contacts.findIndex(task => task.id === action.payload);
            state.contacts.splice(index, 1);
        },
    }
})

const persistConfig = {
    key: 'contacts',
    storage,
}

export const contactReducer = persistReducer(persistConfig, contactSlice.reducer)

export const { addContact, deleteContact } = contactSlice.actions;