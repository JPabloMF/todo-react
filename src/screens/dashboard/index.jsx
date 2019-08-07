import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home';
import ToDo from './toDo';

const Dashboard = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/dashboard" component={Home} />
                <Route path="/dashboard/home" component={Home} />
                <Route path="/dashboard/todo" component={ToDo} />
            </Switch>
        </Router>
    );
}

export default Dashboard;