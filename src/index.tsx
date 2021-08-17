import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import './index.css';
import {ContactContextProvider} from './components/Contact-Context';

ReactDOM.render(
    <BrowserRouter>
    <ContactContextProvider>
      <App/>
    </ContactContextProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
