import { createSlice } from '@reduxjs/toolkit';
import data from 'components/data/contacts';

const contactsInitialState = data;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactAfter(state, action) {
      state.push(action.payload);
    },
    addContactBefore(state, action) {
      state.unshift(action.payload);
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContactAfter, addContactBefore, removeContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
