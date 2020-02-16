/**
 * This component contains the create account link
 */
import React from 'react'

export default function Login(props)  {
    return(
        <div>
            <a 
                href={props.link} 
                style={{
                    'fontSize':'18px',
                    'color': '#60b0f4'}} >
                Create Account
            </a>
        </div>
    )
}