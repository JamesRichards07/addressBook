import React from 'react';
import { Switch, Route} from 'react-router-dom';

import ContactsPage from './pages/Contacts';
// import HomePage from './pages/Home';

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
      <Route path='/contacts/*' exact>
        <ContactsPage/>
        
      </Route>
      </Switch>
    </div>
  );
}

export default App;
