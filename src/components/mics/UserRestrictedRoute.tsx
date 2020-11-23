import React from 'react'
import { RouteProps, Redirect, Route, RouteComponentProps } from 'react-router-dom'

type UserRestrictedRouteProps = RouteProps & RouteComponentProps;

class UserRestrictedRoute extends React.Component<UserRestrictedRouteProps, any> {
    render() {
        let CompType = this.props.component as React.ComponentClass;
        return (
            <Route render={(props) => {
                if (this.props.path !== props.location.pathname) {
                    return null;
                }
                // if (tokenSet) {
                //     return (<CompType {...props} />);
                // } else {
                //     return (<Redirect to="/" />);
                // }
            }} />
        );
    }
}

export default UserRestrictedRoute;