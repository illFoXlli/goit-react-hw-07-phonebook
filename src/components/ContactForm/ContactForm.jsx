import PropTypes from 'prop-types';
import * as React from 'react';

import {
  FormSubmit,
  LabelName,
  LabelNumber,
  ButtonSubmit,
} from './ContactForm.styled';

const ContactForm = ({
  addContact,
  onChangeInputName,
  onChangeInputNumber,
}) => {
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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  onChangeInputName: PropTypes.func,
};

export default ContactForm;
