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
