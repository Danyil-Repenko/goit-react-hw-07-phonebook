import { createSelector } from "@reduxjs/toolkit";

export const selectFilterState = state => state.filter.query;
export const selectContacts = state => state.contacts.items;
export const selectLoadingState = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector([selectFilterState, selectContacts], (filter, contacts) => {
    if (filter === '') {
        return contacts;
    } else {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter)
        );
    }
})