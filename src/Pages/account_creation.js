import React, { Component, Fragment } from 'react'
import Footer from '../Components/footer_contact'
import CreateForm from '../Components/form_account_create'
import { BackButton } from '../Components/buttons'
import logo from '../Images/Logo.PNG'


class AccountCreationPage extends Component {

    constructor() {
        super()

        this.state = {
            first_name: "",
            last_name: "",
            password: "",
            password_confirm: "",
            email: "",
            error_msg: null
        }
        //Bindings
        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmission = this.handleFormSubmission.bind(this)
    }


    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    async handleFormSubmission(event) {
        event.preventDefault()
        this.checkValidFields()
        
        try{
            console.log("TODO: Establish connection with server")
        } catch(error) {
            this.setState( {error_msg: error})
        }
    }

    // makes sure that all input fields are valid
    checkValidFields() {
        const s = this.state
        if(s.password !== s.password_confirm){
            this.setState({ error_msg: "Passwords do not match" })
        }
        else if(s.email === '' || s.first_name === '' || s.last_name === ''|| s.password === '' 
        || s.password_confirm === '') {
            this.setState({ error_msg: 'One or more fields are not filled in'})
        }
    }

    /*
<a href={'/'} 
                        style={{
                            'fontSize':'14px',
                            'color': '#60b0f4'}} >
                        Return Home
                    </a>
    */


    render() {
        return(
            <Fragment>
            <div className='container-fluid'>
                <div className='mt-2'>
                    <BackButton
                        text='Back to Login'
                        type='btn-sm'
                    />
                </div>
                <div className='row justify-content-center mb-3'>
                    <div className='w-25'>
                        <img src={logo} className="img-fluid" alt="Responsive"/>
                    </div>
                </div>

                <CreateForm
                    handleChange={this.handleChange}
                    state = {this.state}
                    submit = {this.handleFormSubmission}
                    errorMessage = {this.state.error_msg}
                    
                />
            </div>
           <Footer />
           </Fragment>
        )
    }
}

export default AccountCreationPage