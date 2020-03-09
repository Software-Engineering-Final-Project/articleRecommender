import React, { Component } from "react"
import { BackButton } from '../Components/buttons'
import Pfp from '../Images/Goku.jpg'
import Navbar from '../Components/navbar'
class ProfilePage extends Component {


    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='mt-2'>
                    <BackButton
                        text= "Back to home page"
                        type='btn-sm'
                    />
                    <div className='row justify-content-center mb-5'>
                    <div className='w'>
                        <img src={Pfp} className="img-fluid" alt="Responsive"/>
                    </div>
                </div>
                </div>

                <div className='container'>
                    <div className='row justify-content-center mb-5'>
                        <h3>First Name</h3>
                    </div>
                    <div className='row justify-content-center mb-5'>
                        <h3>Last Name</h3>
                    </div>
                    <div className='row justify-content-center mb-5'>
                        <h3>Username</h3>
                    </div>
                    <div className='row justify-content-center mb-5'>
                        <h3>Email</h3>
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
        )

    }



}

export default ProfilePage

