import React, { Component } from "react"
import { BackButton } from '../Components/buttons'
import Pfp from '../Images/Goku.jpg'
import CreateForm from '../Components/form_profile_create'


class ProfilePageUpdate extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className='container-fluid'>
                <div className='mt-2'>
                    <BackButton
                        text="Back to home page"
                        type='btn-sm'
                    />
                    <div className='row justify-content-center mb-5'>
                        <div className='w'>
                            <img src={Pfp} className="img-fluid" alt="Responsive" />
                        </div>
                    </div>
                </div>

                <CreateForm
                    handleChange={this.handleChange}
                    state={this.state}
                    submit={this.handleFormSubmission}
                    errorMessage={this.state.error_msg}

                />
                <div className='row justify-content-center mb-5'>
                    <BackButton
                        text="Update Information"
                        type='btn-sm'
                    />
                </div>

            </div>



        )

    }



}

export default ProfilePageUpdate

