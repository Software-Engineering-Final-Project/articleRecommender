import React, { Component } from 'react'
import { HomeButton } from '../Components/buttons'
import AboutInformation from '../Components/container_about'
import '../CSS/about.css'

class AboutPage extends Component {

    render() {
        return(
            <div className='container-fluid'>

                <div className='row justify-content-center quote' style={{'margin':'150px'}}>
                    <blockquote className="blockquote text-center">
                        <p className="mb-0" style={{'fontSize':'36px'}}>Why fit in when you were born to stand out?</p>
                        <footer className="blockquote-footer"><cite title="Source Title">Dr. Seuss</cite></footer>
                    </blockquote>
                </div>

                <AboutInformation />
                <div className='m-4'>
                    <HomeButton
                        type='btn-sm'
                    />
                </div>
            </div>
        )
    }
}


export default AboutPage