import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {GlobalProvider} from './context/provider';

import Header from './components/header';
import Login from './containers/login';
import Register from './containers/register';
import Landing from './containers/landing';

function App() {
    return (
        <GlobalProvider>
            <Header />
            <Router>
                <div className="root">
                    <Switch>
                        <Route path="/" exact component={Landing}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path='/register' exact component={Register} />
                        <Route path='/home' exact component={Landing} />
                    </Switch>
                </div>
            </Router>
        </GlobalProvider>
    );
}

export default App;
