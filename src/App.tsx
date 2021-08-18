import React from 'react';
import { Switch, Route} from 'react-router-dom';

import ContactsPage from './pages/Contacts';
import NewContactPage from './pages/NewContact';
import MainPage from './pages/Main';
import DeleteContactPage from './pages/DeleteContact';
import UpdateContactPage from './pages/UpdateContact';

function App() {
  return (
    <div>
      <Switch>
      <Route path='/' exact>
        <MainPage/>
      </Route>
      <Route path='/contacts' exact>
        <MainPage/>
      </Route>
      <Route path='/contacts/edit/newContact' exact>
        <ContactsPage/>
        <NewContactPage/>
      </Route>
      <Route path='/contacts/edit/deleteContact' exact>
        <ContactsPage/>
        <DeleteContactPage/>
      </Route>
      <Route path='/contacts/edit/updateContact' exact>
        <ContactsPage/>
        <UpdateContactPage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
