import { FILTER_CONTACTS } from '../index';

const filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
