import React, { Component, Fragment } from 'react'
import Navbar from '../Components/navbar'
import SearchBar from '../Components/searchBar'

class HomeSearch extends Component {

    constructor(props) {
        super(props)
        const { account, sessionKey } = JSON.parse(sessionStorage.getItem('auth'))
        this.sessionKey = sessionKey
        this.user = account
        this.image = "data:image/png;base64," + this.user.image
    }

    render() {
        return(
        <Fragment>
        <Navbar 
            user={ this.user.username }
            picture={this.image}
        />

        <div className='vertical-center2'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className="jumbotron jumbotron-fluid" style={{'backgroundColor':'white'}}>
                    <div className="container">
                        <h1 className="display-4 text-center">Autism Searches</h1>
                        <p className="lead text-center">A modern search browser for ASD related topics.</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{'width':'50%'}}>
                <div className='col justify-content-center mb-3 text-center col-form-label-lg'>
            
                    <form>
                        <SearchBar />
                        <small id="searchHelp" className="form-text text-muted">Your searches are based on your preferences. See profile for more information.</small>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </Fragment>  
        )
    }

}

export default HomeSearch