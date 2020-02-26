import React, { Component } from 'react'
import { HomeButton } from '../Components/buttons'
import AboutInformation from '../Components/container_about'


class AboutPage extends Component {

    render() {
        return(
            <div className='container-fluid'>

                <div className='row justify-content-center' style={{'margin':'150px'}}>
                    <blockquote className="blockquote text-center">
                        <p className="mb-0">I do not suffer from Autism, but I do suffer from the way you treat me.</p>
                        <footer className="blockquote-footer"><cite title="Source Title">Tylor Durdin</cite></footer>
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