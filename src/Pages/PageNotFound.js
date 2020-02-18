import React from "react"
import Logo404 from '../Images/404.png'
import { BackButton, HomeButton } from '../Components/buttons'
import '../CSS/alignment.css'

function PageNotFound() {
    return (
        <div className='container-fluid vertical-center'>
            <div className='container-fluid'>
                <div className='row justify-content-center mb-2'>
                    <img src={Logo404} className="img-fluid" alt="Responsive"/>
                </div>
                <div className='row justify-content-center'>
                    <div className='flex-col-sm-6 mr-2'>
                        <BackButton 
                            text= "Return to Previous Page"
                        />
                    </div>

                    <div className='flex-col-sm-6 ml-2'>
                        <HomeButton />
                    </div>
                </div>
            </div> 
        </div>
    )
}


export default PageNotFound