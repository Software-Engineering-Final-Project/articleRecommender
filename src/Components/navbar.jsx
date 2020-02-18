import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom'

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
                        <h4 className="text-white">SearchIt</h4>
                        <span className="text-muted">A modern search browser for ASD related topics.</span>
                        <ul className="navbar-nav mr-auto">
                        <ListItem
                            text="Home"
                            path='/testSearch'
                        />

                        <ListItem
                            text="Starred Articles"
                            path='/favArticles'
                        />

                        <ListItem
                            text="Edit Profile"
                            path='/profile'
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
                    <LogoutButton />
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
    let history = useHistory()
    const act = props.active === true ? 'active' : ''
    return(
        <li className={`nav-item active ${act}`}>
            <a className="nav-link text-light" href='javascript:void(0);' onClick={() => history.push(props.path)}>{props.text}</a>
        </li>
    )
}

/**
 * Redirects the user to the home page and logs them out.
 */
function LogoutButton() {
    let history = useHistory()
    const signOutIcon = <FontAwesomeIcon icon='sign-out-alt' />
   
    //TODO:Add set logout prop to true
    return(
    <button type="button" class="btn btn-outline-light" onClick={() => history.push('/')}>{signOutIcon}</button>
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

export default Navbar