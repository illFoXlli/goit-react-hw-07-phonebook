import * as React from 'react';
import { nanoid } from 'nanoid';

import { Contacts, ContactsItem } from './Contacts.styled';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contacts/contactsSlicer';
import Notiflix from 'notiflix';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };

  const error = totel => Notiflix.Notify.failure(totel);

  const lowerCaseValue = value => {
    return value.toLowerCase();
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

  if (toShow()?.length) {
    return (
      <Contacts>
        {toShow().map(contact => {
          return (
            <ContactsItem key={nanoid()}>
              <p>{`${contact.name}: ${contact.number}`}</p>
              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="delete"
                  onClick={() => onDeleteContact(contact.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </ContactsItem>
          );
        })}
      </Contacts>
    );
  } else {
    error('List is empty');
    return <h2>List is empty</h2>;
  }
};

export default ContactsList;
