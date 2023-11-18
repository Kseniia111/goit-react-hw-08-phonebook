import { Toaster } from 'react-hot-toast';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useFilter } from '../components/hooks/useFilter';
import { useContacts } from '../components/hooks/useContacts';
//import { WrapperContacts, Container, TextStyled } from './Contacts.styled';
import styled from 'styled-components';
const ContactsPage = () => {
  const [filter, onSetFilter] = useFilter();
  const [contacts, onAddContact, onDeleteContact] = useContacts();

  const empty = () => contacts.length > 0;

  return (
    <Container>
      <WrapperContacts>
        <h2>Phonebook</h2>
        <ContactForm onData={onAddContact} />
      </WrapperContacts>

      <WrapperContacts>
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={onSetFilter} />
        {empty() ? (
          <>
            <ContactList
              contacts={contacts}
              onDeleteContact={onDeleteContact}
            />
          </>
        ) : (
          <TextStyled>
            Phonebook is empty! <br /> Add your contacts.
          </TextStyled>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </WrapperContacts>
    </Container>
  );
};

export default ContactsPage;

export const Container = styled.div`
  margin-top: 30px;
`;
export const TextStyled = styled.h3`
  margin-top: 50px;
  font-size: 22px;
  text-align: center;
`;

export const WrapperContacts = styled.div`
  padding: 15px;
  box-shadow: rgb(33 33 33) 0px 2px 10px 1px;
  margin-bottom: 30px;
`;
