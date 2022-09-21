import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import data from 'components/data/contacts';

import Wrapper from '../Wrapper';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('fox')) || data
  );
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const lowerCaseValue = value => {
    return value.toLowerCase();
  };

  const error = totel => Notiflix.Notify.failure(totel);
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
    setContacts(prevContact => [...prevContact, contact]);
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

  const toShow = () => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(item =>
        lowerCaseValue(item.name).includes(lowerCaseValue(filter))
      );
    }
  };

  const setFilters = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const onDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem('fox', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
      }}
    >
      <Wrapper>
        <h2>Phonebook</h2>
        <ContactForm
          addContact={addContact}
          onChangeInputName={onChangeInputName}
          onChangeInputNumber={onChangeInputNumber}
        />
        <h2>Filter Contacts</h2>
        <Filter setFilter={setFilters} />
      </Wrapper>
      <Wrapper>
        <ContactsList
          toShow={toShow}
          onDeleteContact={onDeleteContact}
          error={error}
        />
      </Wrapper>
    </div>
  );
};
