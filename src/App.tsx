import React,{useContext, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {GlobalProvider} from './context/provider';

import Header from './components/header';
import Login from './containers/login';
import Register from './containers/register';
import Landing from './containers/landing';
import MyBlog from './containers/myblog';
import MyTour from './containers/tour/mytour';
import TourDetail from './containers/tour/details'
import { ToastContainer } from 'react-toastify';

import {updateToken} from './context/auth/actions';
import { GlobalContext, IAuthValue } from "./context/provider";
import UserRestrictedRoute from './components/mics/UserRestrictedRoute';
function App() {

    const {authDispatch:dispath} = useContext(GlobalContext) as IAuthValue;
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
                        <UserRestrictedRoute path='/home' exact component={Landing} />
                        <UserRestrictedRoute path='/my-blog' exact component={MyBlog}/>
                        <UserRestrictedRoute path='/my-tour' exact component={MyTour}/>
                        <UserRestrictedRoute path='/tour/details' exact component={TourDetail} />
                    </Switch>
                </div>
            </Router>
        </GlobalProvider>
    );
}

export default App;
