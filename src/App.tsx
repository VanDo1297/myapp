import React,{useContext, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {GlobalProvider} from './context/provider';

import Header from './components/header';
import Login from './containers/login';
import Register from './containers/register';
import Landing from './containers/landing';
import { ToastContainer } from 'react-toastify';

import {updateToken} from './context/auth/actions';
import { GlobalContext, IValue } from "./context/provider";
function App() {

    const {authDispatch:dispath} = useContext(GlobalContext) as IValue;
    const token = localStorage.getItem('token');
    useEffect(()=>{
        persistToken()
    })
    
    const persistToken=async ()=>{
        if (token) {
            await updateToken(token)(dispath);
        }
    }
    return (
        <GlobalProvider>
            <ToastContainer />
            <Router>
                <Header />
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
