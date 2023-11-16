import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/Selectors';
import { fetchContacts } from 'redux/contactsOperations';

export default function Contacts() {
  const dispatch = useDispatch();

  const { contactsArr, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h1>PhoneBook</h1>
      <ContactForm />

      <div>
        {isLoading && !error && <b>Loading...</b>}
        {error && <p>Oops, something went wrong</p>}
        {contactsArr.length > 0 && (
          <div>
            <h2>Contacts</h2>
            <Filter />
          </div>
        )}
        {contactsArr.length > 0 && <ContactsList />}
      </div>
    </div>
  );
}
