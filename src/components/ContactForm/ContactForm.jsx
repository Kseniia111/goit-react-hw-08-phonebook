import { useState } from 'react';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsArr } from 'redux/Selectors';
import { postContact } from 'redux/contactsOperations';
import { Form, Label, Input, SubmitButton } from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const stateContacts = useSelector(selectContactsArr);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleInputChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    for (const contact of stateContacts) {
      if (
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
      ) {
        Notiflix.Notify.failure(`${[name]} is already in contact`);
        return;
      } else if (contact.number === form.elements.number.value) {
        return Notiflix.Notify.failure(
          `${form.elements.number.value} is already in contact`
        );
      }
    }

    dispatch(
      postContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );

    Notiflix.Notify.success('Contact added');
    form.reset();

    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          onChange={handleInputChange}
          value={name}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          onChange={handleInputChange}
          value={number}
        />
      </Label>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
}
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsOperations';
// import Notiflix from 'notiflix';
// import { selectContacts } from 'redux/Selectors';
// import { ReactComponent as AddIcon } from '../icons/plus-user.svg';
// import { Form, Input, Label, Button } from './ContactForm.styled';

// const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();

//     const contact = {
//       name: name,
//       number: number,
//     };

//     const isContactExist = contacts.find(
//       ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//     );

//     if (isContactExist) {
//       Notiflix.Report.warning(
//         'Alert',
//         `Contact with name ${contact.name} already exists!`,
//         'Ok'
//       );
//       return;
//     }

//     const isNumberExist = contacts.find(
//       ({ number }) =>
//         contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
//     );

//     if (isNumberExist) {
//       Notiflix.Report.warning(
//         'Alert',
//         `Number ${contact.number} is already in contacts!`,
//         'Ok'
//       );
//       return;
//     }

//     dispatch(addContact(contact));
//     setName('');
//     setNumber('');
//   };

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   const handleNumberChange = event => {
//     setNumber(event.target.value);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label>Name</Label>
//       <Input
//         type="text"
//         name="name"
//         placeholder="Enter name"
//         value={name}
//         onChange={handleNameChange}
//         // pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
//         // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />

//       <Label>Number</Label>
//       <Input
//         type="tel"
//         name="number"
//         placeholder="Enter phone number"
//         value={number}
//         onChange={handleNumberChange}
//         // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//         // title="Phone number format could be: +1 555 1234567 or 555 1234567."
//         required
//       />

//       <Button type="submit">
//         <AddIcon />
//       </Button>
//     </Form>
//   );
// };

// export default ContactForm;
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
