import * as React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Contacts, ContactsItem } from './Contacts.styled';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const ContactsList = ({ toShow, onDeleteContact, error }) => {
  if (toShow().length) {
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
ContactsList.propTypes = {
  toShow: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  error: PropTypes.func,
};

export default ContactsList;
