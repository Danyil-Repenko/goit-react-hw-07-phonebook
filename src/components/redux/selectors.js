export const selectFilterState = state => state.filter.query;
export const selectContacts = state => state.contacts.items;
export const selectLoadingState = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;