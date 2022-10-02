import { createReducer } from '@reduxjs/toolkit';
import data from 'components/data/contacts';
import {
  REMOVE_CONTACTCT,
  ADD_CONTACTCT_BEFORE,
  ADD_CONTACTCT_AFTER,
} from './contactsConstants';

const contactsInitialState = data;

//////////////////////////////////////////

const contactsReducer = createReducer(contactsInitialState, {
  [ADD_CONTACTCT_AFTER]: (state, action) => {
    return [...state, action.payload];
  },
  [ADD_CONTACTCT_BEFORE]: (state, action) => {
    return [action.payload, ...state];
  },
  [REMOVE_CONTACTCT]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

export default contactsReducer;

/////////////////////////////////////////

// const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case ADD_CONTACTCT_AFTER:
//       return [...state, action.payload];
//     case ADD_CONTACTCT_BEFORE:
//       return [action.payload, ...state];
//     case REMOVE_CONTACTCT:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export default contactsReducer;
