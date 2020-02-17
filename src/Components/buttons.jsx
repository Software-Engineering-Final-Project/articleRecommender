import React from 'react'
import { useHistory } from 'react-router-dom'


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