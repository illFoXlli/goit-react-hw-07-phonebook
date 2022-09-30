import data from 'components/data/contacts';
import {
  REMOVE_CONTACTCT,
  ADD_CONTACTCT_BEFORE,
  ADD_CONTACTCT_AFTER,
} from './contactsConstants';

const contactsReducer = (
  // state = JSON.parse(localStorage.getItem('fox')) || data,
  state = data,
  action
) => {
  switch (action.type) {
    case ADD_CONTACTCT_AFTER:
      return [...state, action.payload];
    case ADD_CONTACTCT_BEFORE:
      return [action.payload, ...state];
    case REMOVE_CONTACTCT:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

export default contactsReducer;
