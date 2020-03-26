import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//import auth from '../Components/auth'


export const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render= {
            (props) => {
                const isAuthenticated = loadFromStorage()
                if(isAuthenticated) {
                    return <Component {...props}/>
                }
                else {
                    return <Redirect to= {
                        {
                            pathname:'/',
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }
        
        }/>
    )
}

function loadFromStorage() {
    const jsonAuth = sessionStorage.getItem('auth') || null
    if(jsonAuth !== null) {
        const auth = JSON.parse(jsonAuth)
        return auth.authenticated
    } else {
        return false
    }
}