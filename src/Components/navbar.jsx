import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, NavLink, withRouter } from 'react-router-dom'
import auth from './auth'


class Navbar extends Component {

    constructor(props) {
        super(props)

        this.singInIcon = <FontAwesomeIcon icon='sign-out-alt' />

    }
    render() {
        return (
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h4 className="text-white">Autism Searches</h4>
                        <span className="text-muted">A modern search browser for ASD related topics.</span>
                        <ul className="navbar-nav mr-auto">
                        <ListItem
                            text="Home"
                            path='/search'
                            history= {this.props.history}
                        />

                        <ListItem
                            text="Starred Topics and Articles"
                            path='/favorites'
                            history= {this.props.history}
                        />

                        <ListItem
                            text="Edit Profile"
                            path='/profile'
                            history= {this.props.history}
                        />
                        </ul>
                    </div>
                </div>
                <nav className="navbar navbar-dark" style={{'backgroundColor': '#60b0f4'}}>
                    <NavPullDown />
                    <a className="navbar-brand" href="/profile">
                        <img src={this.props.picture} width="30" height="30" className="d-inline-block rounded-circle align-top mr-2" alt="" />
                            {this.props.user}
                    </a>
                    <LogoutButton 
                        history= {this.props.history}/>
                </nav>
            </div>
        )
    }
}


/**
 * Creates a list item, where the path is a path to the redirect. It requires the following props:
 * 1) path: The path of the redirect
 * 2) active: Boolean -> true if the link is the active link
 * 3) text: The text to be displayed
 */
function ListItem(props) {
    let history = props.history
    const act = props.active === true ? 'active ' : ''
    return(
        <li className={`nav-item active ${act}`}>
            <a className="nav-link text-light" href='#!' onClick={(e) => {
                e.preventDefault()
                history.push(props.path)}
                }> {props.text}
            </a>
        </li>
    )
}

/**
 * Redirects the user to the home page and logs them out.
 */
function LogoutButton(props) {
    let history = props.history
    const signOutIcon = <FontAwesomeIcon icon='sign-out-alt' />
    
    return(
    <button type="button" className="btn btn-outline-light" onClick={() => {
        auth.logout(() =>{
            history.push('/')
        })}}>
            {signOutIcon}
    </button>
    )

}


function NavPullDown() {
    return (
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarToggleExternalContent" 
            aria-controls="navbarToggleExternalContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    )
}

/**
 * Sends the user to the edit profile page
 */
function ProfileButton(component) {
    let history = useHistory()
    
    //TODO: Push the login status to the account page
    return (
        <button type="button" onClick={() => history.push('/account')}  className={'btn btn-outline-light'}>{component}</button>
    )
}

export default withRouter(Navbar)