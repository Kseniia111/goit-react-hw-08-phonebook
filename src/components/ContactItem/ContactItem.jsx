import { ContactItemLi, DeleteBtn } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/Selectors';
import Notiflix from 'notiflix';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`Contact ${name} deleted successfully`);
  };

  return visibleContacts.map(({ id, name, number }) => {
    return (
      <ContactItemLi key={id}>
        {name}: {number}
        <DeleteBtn type="button" onClick={() => handleDelete(id, name)}>
          Delete
        </DeleteBtn>
      </ContactItemLi>
    );
  });
};
