import React, { Component } from 'react'
import { HomeButton } from '../Components/buttons'
import AboutInformation from '../Components/container_about'
import logo from '../Images/Logo.PNG'


class AboutPage extends Component {

    render() {
        return(
            <div className='container-fluid'>
                <div className='mt-2'>
                    <HomeButton
                        type='btn-sm'
                    />
                </div>

                <div className='row justify-content-center mb-3'>
                    <div className='w-25'>
                        <img src={logo} className="img-fluid" alt="Responsive"/>
                    </div>
                </div>

                <AboutInformation />
            </div>
        )
    }
}


export default AboutPage