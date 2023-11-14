import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactList } from './ContactList.styled';
export const ContactsList = () => {
  return (
    <ContactList>
      <ContactItem />
    </ContactList>
  );
};
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
