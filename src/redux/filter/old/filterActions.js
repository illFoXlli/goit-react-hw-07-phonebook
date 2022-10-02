import { FILTER_CONTACTS } from './filterConstant';

export const getFilterContacts = value => ({
  type: FILTER_CONTACTS,
  payload: value,
});
