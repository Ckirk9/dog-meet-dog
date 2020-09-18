import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, currentPet, ...rest }) => {
    return (
        <Route
        {...rest}
        render={({ location }) =>
            currentPet ? (
            children
        ) : (
            <Redirect
            to={{
                pathname: "/signUp",
                state: { from: location }
            }}
            />
        )
        }
    />
    );
}

export default PrivateRoute;