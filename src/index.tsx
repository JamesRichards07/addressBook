import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import './index.css';
import {ContactContextProvider} from './components/Contact-Context';

ReactDOM.render(
  <ContactContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ContactContextProvider>,
  document.getElementById('root')
);
