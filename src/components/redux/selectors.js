export const selectFilterState = state => state.filter.query;
export const selectContacts = state => state.contacts.items;
export const selectLoadingState = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = state => {
    const filter = selectFilterState(state);
    const contacts = selectContacts(state);
    if (filter === '') {
        return contacts;
    } else {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter)
        );
    }
}