import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from './containers/dashboard';
import Header from './components/header';
import Login from './containers/login';
import Register from './containers/register';
import Landing from './containers/landing';
function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/sign-in" exact component={Login}/>
                <Route path="/sign-up" exact component={Register}/>
            </Switch>
        </Router>
    );
}

export default App;
