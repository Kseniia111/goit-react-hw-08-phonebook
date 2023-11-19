import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.loading;

//export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
// export const getContacts = ({ contacts }) => contacts.items;

// export const getFilter = ({ filter }) => filter;

// export const getVisibleFilter = ({ contacts, filter }) => {
//   if (!filter) {
//     return contacts.items;
//   }

//   return contacts.items.filter(el =>
//     el.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
