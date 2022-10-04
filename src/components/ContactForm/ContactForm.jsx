import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import { error } from '../utils/error';
import { lowerCaseValue } from '../utils/utilits';
import { addContacts } from 'redux/feach/feach';

import {
  FormSubmit,
  LabelName,
  LabelNumber,
  ButtonSubmit,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const addContact = event => {
    event.preventDefault();
    let marker = contacts.some(
      item => item.name.toLowerCase() === lowerCaseValue(name)
    );

    if (marker) {
      return error(` ${name}is already in contacts`);
    }
    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  const onChangeInputName = е => {
    setName(е.target.value);
  };

  const onChangeInputNumber = е => {
    setNumber(е.target.value);
  };

  return (
    <>
      <FormSubmit onSubmit={addContact}>
        <LabelName>
          Имя:
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => onChangeInputName(e)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelName>
        <LabelNumber>
          Номер:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={e => onChangeInputNumber(e)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelNumber>

        <ButtonSubmit
          type="submit"
          variant="text"
          color="success"
          disableElevation
        >
          Add contact
        </ButtonSubmit>
      </FormSubmit>
    </>
  );
};

export default ContactForm;
