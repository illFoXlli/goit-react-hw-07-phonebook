import {
  ADD_CONTACTCT_AFTER,
  ADD_CONTACTCT_BEFORE,
  REMOVE_CONTACTCT,
} from './contactsConstants';

export const addContactAfter = value => ({
  type: ADD_CONTACTCT_AFTER,
  payload: value,
});

export const addContactBefore = value => ({
  type: ADD_CONTACTCT_BEFORE,
  payload: value,
});

export const removeContact = id => ({
  type: REMOVE_CONTACTCT,
  payload: id,
});
