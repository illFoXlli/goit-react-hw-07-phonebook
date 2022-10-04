import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactsSlicer';
import { filterReducer } from './filter/filterSlicer';
import { fetchContacts } from './feach/feach';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

const rootReducer = combineReducers({
  test: (state = 2) => state,
  test2: (state = 3) => state,

  contacts: contactsReducer,
  filter: filterReducer,
});

// const persistConfig = {
//   key: 'contats',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = getDefaultMiddleware => getDefaultMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

// export const persistStores = persistStore(store);
