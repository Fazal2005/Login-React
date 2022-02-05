import React from 'react';
import Signup from './components/signup';
import Signin from './components/signin.js';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </Router> 
    </div>
  );
};

export default App;
