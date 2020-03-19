import React, { Component, Fragment } from "react"
import { BackButton } from '../Components/buttons'
import Navbar from '../Components/navbar'
import auth from '../Components/auth'

class ProfilePage extends Component {


    constructor(props) {
        super(props)
        
        this.user = auth.account
        this.image = "data:image/png;base64," + auth.account.image

    }

    render() {
        return (
            <Fragment>
                <Navbar
                    user={ this.user.username }
                    picture={this.image}
                />
           
            <div className='container-fluid'>
                <div className='mt-2'>
                    <div className='row justify-content-center mb-5'>
                    <div className='w'>
                        <img src={this.image} className="img-fluid" alt="Responsive"/>
                    </div>
                </div>
                </div>

                <div className='container'>
                    <div className='row justify-content-center mb-5'>
                        <h3>{this.user.first_name}</h3>
                    </div>
                    <div className='row justify-content-center mb-5'>
                        <h3>{this.user.last_name}</h3>
                    </div>
                    <div className='row justify-content-center mb-5'>
                        <h3>{this.user.username}</h3>
                    </div>
                    <div className='row justify-content-center mb-5'>
                        <h3>{this.user.email}</h3>
                    </div>
                    <div className='row justify-content-center mb-5'>
                        <h3>{this.user.status ? "active" : "inactive"}</h3>
                    </div>
                    <div className='row justify-content-center mb-3'></div>

                    <div className='row justify-content-center mb-5'>
                    <BackButton
                        text= "Update Information"
                        type='btn-sm'
                    />
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default ProfilePage

