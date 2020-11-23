import React,{useContext} from 'react';
import { RouteProps, Redirect, Route, RouteComponentProps } from 'react-router-dom'
import {IValue, GlobalContext} from '../../context/provider';

type UserRestrictedRouteProps = RouteProps;

const UserRestrictedRoute = (props : UserRestrictedRouteProps) => {

    const {authState} = useContext(GlobalContext) as IValue;
    let tokenSet =  authState.token;
    let CompType = props.component as React.ComponentClass;

    return (
        <Route render={(props) => {
            if (tokenSet) {
                return (<CompType {...props} />);
            } else {
                return (<Redirect to="/login" />);
            }
        }} />
    );
}

export default UserRestrictedRoute;