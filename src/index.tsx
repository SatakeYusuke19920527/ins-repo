import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import PageA from './pages/PageA';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PageA />
    </Provider>
  </React.StrictMode>,
document.getElementById('app'));