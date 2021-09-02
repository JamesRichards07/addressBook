import React from 'react';
import { Switch, Route} from 'react-router-dom';

import NewContactPage from './pages/NewContact';
import MainPage from './pages/Main';
import UpdateContactPage from './pages/UpdateContact';
import DeleteContactPage from './pages/DeleteContact';

function App() {
  return (
    <div>
      <Switch>
      <Route path='/' exact>
        <MainPage/>
      </Route>
      <Route path='/edit/deleteContact' exact>
        <DeleteContactPage/>
      </Route>
      <Route path='/edit/newContact' exact>
        <NewContactPage/>
      </Route>
      <Route path='/edit/updateContact' exact>
        <UpdateContactPage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
