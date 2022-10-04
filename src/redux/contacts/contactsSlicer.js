import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, deleteContact, addContacts } from '../feach/feach';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    status: null,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    //////////////////////////////////////
    [deleteContact.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [deleteContact.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    /////////////////////////////////////////
    [addContacts.pending]: (state, action) => {
      console.log(state.status);
      state.status = 'loading';
      state.error = null;
    },
    [addContacts.fulfilled]: (state, action) => {
      console.log(state.status);
      state.status = 'resolved';
      state.items.unshift(action.payload);
    },
    [addContacts.rejected]: (state, action) => {
      console.log(state.status);
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
