import { Button, Label, StyledForm } from './ContactForm.styled';

import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import { selectContacts } from 'redux/Selectors';
import { addContact } from 'redux/contactsOperations';

import * as Yup from 'yup';

const validSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short name!').required('Required!'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const checkedContact = contact => {
    return contacts.some(
      element => element.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const newContact = contact => {
    if (checkedContact(contact)) {
      toast.error(`${contact.name} already in contacts`);
    } else {
      dispatch(addContact(contact));
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validSchema}
      onSubmit={(values, actions) => {
        newContact(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name:
          <Field name="name" type="text" />
        </Label>
        <Label>
          Tel:
          <Field name="number" type="tel" />
        </Label>

        <Button type="submit">Add contact</Button>
        <Toaster />
      </StyledForm>
    </Formik>
  );
};

// import Button from '@mui/material/Button';
// import { useState } from 'react';
// import { ContainerForm, ContaierField, FieldItem } from './ContactForm.styled';

// export function ContactForm({ onData }) {
//   const initialState = {
//     name: '',
//     number: '',
//   };

//   const [state, setState] = useState({ ...initialState });
//   const { name, number } = state;

//   const handleChange = ({ target }) => {
//     const { name, value } = target;
//     setState(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onData({ ...state });
//     setState({ ...initialState });
//   };

//   return (
//     <ContainerForm onSubmit={handleSubmit}>
//       <ContaierField>
//         Name
//         <FieldItem
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           placeholder=" enter name"
//           onChange={handleChange}
//         />
//       </ContaierField>
//       <ContaierField>
//         Phone number
//         <FieldItem
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           placeholder=" enter number"
//           onChange={handleChange}
//         />
//       </ContaierField>
//       <Button
//         variant="contained"
//         size="small"
//         type="submit"
//         disabled={!name || !number}
//       >
//         Add contact
//       </Button>
//     </ContainerForm>
//   );
// }
