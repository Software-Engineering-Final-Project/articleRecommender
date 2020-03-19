import React, { Component, Fragment } from 'react'
import Footer from '../Components/footer_contact'
import CreateForm from '../Components/form_account_create'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackButton } from '../Components/buttons'



class AccountCreationPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            first_name: "",
            last_name: "",
            password: "",
            password_confirm: "",
            email: "",
            error_msg: null
        }

        this.imageIcon = <FontAwesomeIcon icon={['fas', 'images']} size='sm' />

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
        this.checkFieldsAndContinue()
    }

    // makes sure that all input fields are valid
    checkFieldsAndContinue() {
        const s = this.state
        if(s.password !== s.password_confirm){
            this.setState({ error_msg: "Passwords do not match" })
        }
        else if(s.email === '' || s.first_name === '' || s.last_name === ''|| s.password === '' 
        || s.password_confirm === '') {
            this.setState({ error_msg: 'One or more fields are not filled in'})
        } else {
            const { error_msg, ...rest } = this.state
            this.props.history.push({
                pathname: '/createAccount2',
                state: rest
            })
        }
    }

    changePicture() {
        console.log("We Here!!")
    }
   
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
                    <div className='flex-row'>
                        <img src='https://via.placeholder.com/150' className="img-fluid rounded-circle" style={{'width':'150', 'height': '150'}} alt="Responsive"/>
                        <div className='justify-content-end'>
                            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={ () => this.changePicture()}>
                                {this.imageIcon}
                            </button>
                        </div>
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