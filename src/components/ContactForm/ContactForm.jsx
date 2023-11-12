import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux/Selectors';
import { ReactComponent as AddIcon } from '../icons/plus-user.svg';
import { Form, Input, Label, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: name,
      number: number,
    };

    const isContactExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExist) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name ${contact.name} already exists!`,
        'Ok'
      );
      return;
    }

    const isNumberExist = contacts.find(
      ({ number }) =>
        contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (isNumberExist) {
      Notiflix.Report.warning(
        'Alert',
        `Number ${contact.number} is already in contacts!`,
        'Ok'
      );
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={number}
        onChange={handleNumberChange}
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Phone number format could be: +1 555 1234567 or 555 1234567."
        required
      />

      <Button type="submit">
        <AddIcon />
      </Button>
    </Form>
  );
};

export default ContactForm;
//import { useState } from 'react';
// import React from 'react';
// //import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsOperations';
// import { selectContacts } from 'redux/Selectors';

// // const nameInputId = nanoid();
// // const phoneInputId = nanoid();

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);

//   const handleSubmit = event => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const name = form.elements.name.value;
//     const phone = form.elements.phone.value;

//     const nameExist = contacts.find(contact => contact.name === name);
//     const phoneExist = contacts.find(contact => contact.phone === phone);

//     if (nameExist) {
//       alert(`${name} is already in contacts`);
//     } else if (phoneExist) {
//       alert(`This number ${phone} is already in contacts`);
//     } else {
//       const contact = { name, phone };
//       dispatch(addContact(contact));
//       form.reset();
//     }
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label className={css.formLabel}>
//         Name
//         <input
//           className={css.formInput}
//           placeholder="Name"
//           type="text"
//           name="name"
//           //id={nameInputId}
//           required
//         />
//       </label>
//       <label className={css.formLabel}>
//         Number
//         <input
//           className={css.formInput}
//           placeholder="Phone number"
//           type="tel"
//           name="phone"
//           //id={phoneInputId}
//           required
//         />
//       </label>
//       <button className={css.btnSubmit} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };
