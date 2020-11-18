import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from './containers/dashboard';
import Login from './containers/login';
import Register from './containers/register';
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/sign-in" exact component={Login}/>
                <Route path="/sign-up" exact component={Register}/>
            </Switch>
        </Router>
    );
}

export default App;
