import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsInitialState =
{
    items: [{ id: "2232224", name: "MediaKeyMessageEvent", number: "4545344667" }],
    isLoading: false,
    error: null
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
    }
})

const persistConfig = {
    key: 'contacts',
    storage,
}

export const contactReducer = persistReducer(persistConfig, contactSlice.reducer)

export const { addContact, deleteContact } = contactSlice.actions;