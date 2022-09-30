import { FILTER_CONTACTS } from './index';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
