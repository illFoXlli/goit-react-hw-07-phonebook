import React from 'react';
import ReactDOM from 'react-dom/client';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistStores}> */}
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

function makeAdder(x) {
  let s = 100;
  return function bobBig(y) {
    return x + y + s;
  };
}

var xxxxx = makeAdder(5);
var add10 = makeAdder(10);

console.log(xxxxx(2)); // 7
console.log(add10(2)); // 12

console.log(xxxxx);

console.log(add10);
