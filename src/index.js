import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import { store, persistStores } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStores}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
