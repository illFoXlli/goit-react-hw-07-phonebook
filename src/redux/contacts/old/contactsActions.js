import { createAction } from '@reduxjs/toolkit';
import {
  ADD_CONTACTCT_AFTER,
  ADD_CONTACTCT_BEFORE,
  REMOVE_CONTACTCT,
} from '../contactsConstants';

////////////////////////////////////

export const addContactAfter = createAction(ADD_CONTACTCT_AFTER);

export const addContactBefore = createAction(ADD_CONTACTCT_BEFORE);

export const removeContact = createAction(REMOVE_CONTACTCT);

///////////////////////////////////

// export const addContactAfter = (value) => ({
//   type: ADD_CONTACTCT_AFTER,
//   payload: value,
// });

// export const addContactBefore = value => ({
//   type: ADD_CONTACTCT_BEFORE,
//   payload: value,
// });

// export const removeContact = id => ({
//   type: REMOVE_CONTACTCT,
//   payload: id,
// });
