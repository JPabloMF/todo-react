import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from './screens/signin';
import SignUp from './screens/signup';
import PageNotFound from './components/pageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
