import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Navbar extends Component {

    constructor(props) {
        super(props)

        this.singInIcon = <FontAwesomeIcon icon={['fas', 'singInAlt']} />

    }


    render() {
        return (
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h4 className="text-white">SearchIt</h4>
                        <span className="text-muted">A modern search browser for ASD related topics.</span>
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Starred Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Edit Profile</a>
                        </li>
                        </ul>
                    </div>
                   
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src={this.props.picture} width="30" height="30" className="d-inline-block rounded-circle align-top mr-2" alt="" />
                        {this.props.user}
                    </a>
                </nav>
            </div>
        )
    }
}

export default Navbar