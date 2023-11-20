import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/Selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <div>{isLoading && 'Request in progress...'}</div>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
