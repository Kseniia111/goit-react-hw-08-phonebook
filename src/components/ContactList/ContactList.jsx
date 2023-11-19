import { DeleteButton, List } from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/Selectors';
import { deleteContact } from 'redux/contactsOperations';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name} </p>
          <p>{number}</p>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete contact
          </DeleteButton>
        </li>
      ))}
    </List>
  );
};
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { ContactContainer, ContactEl } from './ContactList.styled';
// export const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ContactContainer>
//       {contacts.map(({ id, name, number }) => (
//         <ContactEl key={id}>
//           <span>{name}: </span>
//           <span>{number}</span>
//           <Button
//             variant="contained"
//             size="small"
//             type="button"
//             onClick={() => onDeleteContact(id)}
//           >
//             Delete
//           </Button>
//         </ContactEl>
//       ))}
//     </ContactContainer>
//   );
// };
