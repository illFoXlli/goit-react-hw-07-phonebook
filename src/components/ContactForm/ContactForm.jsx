import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import { nanoid } from 'nanoid';
import { error } from '../utils/error';
import { lowerCaseValue } from '../utils/utilits';
import { addContactBefore } from '../../redux/contacts/contactsSlicer';

import {
  FormSubmit,
  LabelName,
  LabelNumber,
  ButtonSubmit,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const addContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const nameForm = form.elements.name.value;
    const numberForm = form.elements.number.value;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    let marker = contacts.some(
      item => item.name.toLowerCase() === lowerCaseValue(nameForm)
    );

    if (marker) {
      return error(` ${nameForm}is already in contacts`);
    } else {
      setName(nameForm);
      setNumber(numberForm);
    }
    dispatch(addContactBefore(contact));
    setName('');
    setNumber('');
    form.elements.name.value = '';
    form.elements.number.value = '';
  };

  const onChangeInputName = е => {
    setName(е.target.value);
  };

  const onChangeInputNumber = е => {
    setNumber(е.target.value);
  };

  return (
    <>
      <FormSubmit onSubmit={e => addContact(e)}>
        <LabelName>
          Имя:
          <input
            type="text"
            name="name"
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
