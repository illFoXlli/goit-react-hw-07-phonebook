import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/function',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://633ac27fe02b9b64c616d824.mockapi.io/contacts'
      );

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://633ac27fe02b9b64c616d824.mockapi.io/contacts/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error("Can't delete contact. Server");
      }
      const data = await response.json();

      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'addContacts/function',
  async function (contact, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://633ac27fe02b9b64c616d824.mockapi.io/contacts/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        }
      );

      if (!response.ok) {
        throw new Error("Can't add contact. Server");
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
