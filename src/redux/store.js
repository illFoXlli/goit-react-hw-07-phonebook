import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import contactsReducer from './contacts';
import filterReducer from './filter';
import storage from 'redux-persist/lib/storage';

/////////////////////////////////////////////////////

const rootReducer = combineReducers({
  test: (state = 2) => state,
  test2: (state = 3) => state,
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'fox',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = configureStore(
  rootReducer,
  composeWithDevTools(),
  persistedReducer
);

export let persistor = persistStore(store);
