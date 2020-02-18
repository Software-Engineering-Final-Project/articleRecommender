import React from 'react'
import { useHistory } from 'react-router-dom'


/** Returns the user to the previous page
 * Required props:
 * 1) text: The text for the button
 * 2) type (optional): The type of bootstrap button (sm, lg)
 */
function BackButton(props) {
    let history = useHistory()
    const btnType = determineBtnType(props.type)
    return(
        <button 
            type="button" 
            onClick={() => history.goBack()} 
            className={`btn btn-outline-dark ${btnType}`}>{props.text}</button>
    ) 
}


/** Returns the user to the login screen
 * 1) type (optional): The type of bootstrap button (sm, lg)
 */
function HomeButton(props) {
    let history = useHistory()
    const btnType = determineBtnType(props.type)
    return(
        <button 
            type="button" 
            onClick={() => history.push('/')} 
            className={`btn btn-outline-dark ${btnType}`}>Return to Login</button>
    ) 
}

function determineBtnType(type) {
    return type === undefined ? "" : type
}


export {BackButton, HomeButton }