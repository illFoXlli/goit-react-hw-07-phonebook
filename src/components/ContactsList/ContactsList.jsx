import * as React from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

import { Contacts, ContactsItem } from './Contacts.styled';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
  addContacts,
} from '../../redux/feach/feach';
import { error } from '../utils/error';
import { lowerCaseValue } from '../utils/utilits';
import { removeContact } from '../../redux/contacts/contactsSlicer';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const { status } = useSelector(state => state.contacts);

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
            <ContactsItem key={contact.id}>
              <ul>
                <li>
                  {' '}
                  <p>{`${contact.name}`} </p>
                </li>
                <li>
                  <p>{`${contact.number}`}</p>
                </li>
              </ul>

              <Stack direction="row" spacing={1}>
                <IconButton
                  disabled={status === 'loading'}
                  aria-label="delete"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </ContactsItem>
          );
        })}
      </Contacts>
    );
  }
  // else {
  //   error('List is empty');
  //   return <h2>List is empty</h2>;
  // }
};

export default ContactsList;
