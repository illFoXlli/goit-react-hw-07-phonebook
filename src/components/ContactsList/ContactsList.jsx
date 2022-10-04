import * as React from 'react';
import { Contacts } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { error } from '../utils/error';
import { lowerCaseValue } from '../utils/utilits';
import ContactsItemLi from './ContactsItem';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  // const { status } = useSelector(state => state.contacts);

  const toShow = () => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(item =>
        lowerCaseValue(item.name).includes(lowerCaseValue(filter))
      );
    }
  };

  if (toShow()?.length) {
    return (
      <Contacts>
        {toShow().map(contact => {
          return <ContactsItemLi contact={contact} key={contact.id} />;
        })}
      </Contacts>
    );
  } else {
    error('List is empty');
    return <h2>List is empty</h2>;
  }
};

export default ContactsList;
