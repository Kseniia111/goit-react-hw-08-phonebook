import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectContactsArr = state => state.contacts.contactsArr;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContactsArr, selectFilter],
  (contactsArr, filter) => {
    return contactsArr.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
// import { createSelector } from '@reduxjs/toolkit';

// export const selectContacts = state => state.contacts.items;
// export const selectFilter = state => state.filter;
// export const selectError = state => state.contacts.error;
// export const selectIsLoading = state => state.contacts.isLoading;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
