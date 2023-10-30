import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Application from './components/application';

import { setupStore } from './store';

import './index.css';

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
);
