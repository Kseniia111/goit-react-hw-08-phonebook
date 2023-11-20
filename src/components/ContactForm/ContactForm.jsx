import { Label, StyledForm } from './ContactForm.styled';
import Button from '@mui/material/Button';
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
        <Button variant="contained" size="small" type="submit">
          Add contact
        </Button>
        <Toaster />
      </StyledForm>
    </Formik>
  );
};
