import React from 'react'
import { Route, Redirect } from 'react-router-dom'

/**
 * Protected Route is a React-Router route that requires a user to login before they are able to proceed.
 * If the users tries to access a Protected Route before they log in they will be redirected to the Login Page.
 * @param {Component} Component A react component that the route will redirect the user to if they are logged in.
 * @param {...rest} rest Additional props that you wish to pass to the component
 */
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return(
        <Route
            {...rest}
            render={props => {
                if(rest.state.loggedIn){
                    return <Component {...props} rest={rest.state}/>
                }
                else {
                    return(<Redirect to={{pathname: '/'}} />
                    )
                }
            }}
        />
    )
}

export default ProtectedRoute