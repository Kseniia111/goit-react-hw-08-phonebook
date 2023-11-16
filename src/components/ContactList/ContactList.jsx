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
// import { useSelector } from 'react-redux';

// import { selectFilter, selectContacts } from 'redux/Selectors';

// import { ContactItem } from '../ContactItem/ContactItem';

// import { ContactsList } from './ContactList.styled';

// export const ContactList = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const visibleContacts = [
//     ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
//   ];

//   return (
//     <ContactsList>
//       {visibleContacts.map(({ name, number, id }) => (
//         <ContactItem key={id} id={id} name={name} number={number} />
//       ))}
//     </ContactsList>
//   );
// };
