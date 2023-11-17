import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useFilter } from '../components/hooks/useFilter';
import { useContacts } from '../components/hooks/useContacts';
import { WrapperContacts, Container, TextStyled } from './Contacts.styled';

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

// import { Helmet, HelmetProvider } from 'react-helmet-async';

// import ContactForm from '../components/ContactForm/ContactForm';
// import ContactList from '../components/ContactList/ContactList';
// import Filter from '../components/Filter/Filter';

// function Contacts() {
//   return (
//     <>
//       <HelmetProvider>
//         <Helmet>
//           <title>Phonebook📱</title>
//         </Helmet>
//         <ContactForm />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </HelmetProvider>
//     </>
//   );
// }

// export default Contacts;
// import ContactForm from '../components/ContactForm/ContactForm';
// import ContactsList from '../components/ContactList/ContactList';
// import Filter from '../components/Filter/Filter';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { selectContacts } from 'redux/Selectors';
// import { fetchContacts } from 'redux/contactsOperations';

// export default function Contacts() {
//   const dispatch = useDispatch();

//   const { contactsArr, isLoading, error } = useSelector(selectContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className="container">
//       <h1>PhoneBook</h1>
//       <ContactForm />

//       <div>
//         {isLoading && !error && <b>Loading...</b>}
//         {error && <p>Oops, something went wrong</p>}
//         {contactsArr.length > 0 && (
//           <div>
//             <h2>Contacts</h2>
//             <Filter />
//           </div>
//         )}
//         {contactsArr.length > 0 && <ContactsList />}
//       </div>
//     </div>
//   );
// }
