import React,{useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthenticationContext} from "./Authentication"

const ProtectedRoute = ({component: Component, ...rest }) => {
    const {isUserLoggedIn} = useContext(AuthenticationContext)
    return (
        isUserLoggedIn ?
        <Route {...rest} render={
            props => <Component {...rest} {...props} />
        } />:
            <Redirect to="/" />
    )
}

export default ProtectedRoute;