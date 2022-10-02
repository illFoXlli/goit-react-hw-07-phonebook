import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilterContacts(_, action) {
      return action.payload;
    },
  },
});

export const { getFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
