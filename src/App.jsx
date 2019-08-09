import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

// import SignIn from './screens/signin';
// import SignUp from './screens/signup';
import PageNotFound from "./components/pageNotFound";
import Dashboard from "./screens/dashboard";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
