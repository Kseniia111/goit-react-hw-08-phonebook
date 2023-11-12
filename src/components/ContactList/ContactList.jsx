import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Empty } from 'antd';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/Selectors';
import { Loader } from '../Loader/Loader';
import { fetchContacts } from 'redux/contactsOperations';
import ContactItem from '../ContactItem/ContactItem';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error ? (
        <Loader />
      ) : filteredContacts.length === 0 && !error ? (
        <Empty />
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} contact={{ id, name, number }} />
        ))
      )}
    </ul>
  );
}

export default ContactList;
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import css from './ContactList.module.css';
// import { deleteContact } from 'redux/contactsOperations';
// import { selectFilterContacts } from 'redux/Selectors';

// export function ContactList() {
//   const contacts = useSelector(selectFilterContacts);

//   const dispatch = useDispatch();

//   return (
//     <ul className={css.list}>
//       {contacts.map(contact => (
//         <li className={css.contactItem} key={contact.id}>
//           {contact.name}: {contact.phone}
//           <button
//             className={css.button}
//             type="button"
//             onClick={() => dispatch(deleteContact(contact.id))}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }
