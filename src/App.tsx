import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserRestrictedRoute from './components/mics/UserRestrictedRoute';
import {GlobalProvider} from './context/provider';

import Home from './containers/home';
import Header from './components/header';
import Login from './containers/login';
import Register from './containers/register';
import Landing from './containers/landing';

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Header />
                <div className="root">
                    <Switch>
                        <Route path="/" exact component={Landing}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <UserRestrictedRoute path='/home' exact component={Home} />
                    </Switch>
                </div>
            </Router>
        </GlobalProvider>
    );
}

export default App;
