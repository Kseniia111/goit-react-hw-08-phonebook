export const selectContacts = ({ contacts }) => contacts.items;

export const selectFilter = ({ filter }) => filter;

export const selectFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  return contacts.items.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
};
// import { createSelector } from '@reduxjs/toolkit';

// export const selectContacts = state => state.contacts.items;
// export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
