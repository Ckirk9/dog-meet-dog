import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
    const isAuthenticated = useState(localStorage.getItem('uid'))
    console.log('IsAuthed: ', isAuthenticated);
    return (
        <Route
        {...rest}
        render={({ location }) =>
            isAuthenticated[0] ? (
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