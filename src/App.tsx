import React from 'react';
import { Switch, Route} from 'react-router-dom';

import ContactsPage from './pages/Contacts';
import NewContactPage from './pages/NewContact';

function App() {
  return (
    <div>
      <Switch>
      <Route path='/' exact>
        <ContactsPage/>
      </Route>
      <Route path='/contacts' exact>
        <ContactsPage/>
      </Route>
      <Route path='/newContact' exact>
        <ContactsPage/>
        <NewContactPage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
