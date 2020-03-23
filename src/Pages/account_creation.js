import React, { Component } from 'react'
import CreateForm from '../Components/form_account_create'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackButton } from '../Components/buttons'
import ImageModal from '../Components/Modals/account_create_picture'
import Default_User from '../Images/default_user.png'

class AccountCreationPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            first_name: "",
            last_name: "",
            password: "",
            password_confirm: "",
            email: "",
            error_msg: null,
            showModal: false,
            picture: {image: Default_User, path: "/default_user.png"},
            images: []
        }

        this.imageIcon = <FontAwesomeIcon icon={['fas', 'images']} size='sm' />

        //Bindings
        this.handleChange = this.handleChange.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.changePicture = this.changePicture.bind(this)
        this.handleServerError = this.handleServerError.bind(this)
        this.handleFormSubmission = this.handleFormSubmission.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }


    componentDidMount() {
        fetch('image/all')
        .then( result => result.json())
        .then( data => {
            // find the default user
            let default_user = 0;
            for(let i = 0; i < data.length; i++) {
                if(data[i].path === '/default_user.png'){
                    default_user = i;
                }
            }
            this.setState({
                images: data,
                picture: data[default_user]
            })
        })
        .catch(error => alert("Unable to connect to the server. Please try again later!"))
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

        if(this.fieldsAreValid()) {
            try {
                const response = await this.sendNewAccountToServer()
                if(response.status !== 201) {
                  this.handleServerError(response)
                } else{
                    const body = await response.json()
                    const id = body.id // primary key of the created account

                    this.props.history.push({
                        pathname: '/createAccount2',
                        account_id: id
                    })
                }
            } catch(error) {
                this.setState({error_msg: error.message})
            }
        }
    }

    // Handles the different types of errors, so we do not expose to much of the server
    async handleServerError(serverResponse) {
        if(serverResponse.status === 500) {
            alert("Unable to connect to the server. Please try again later!")
        } else {
            const body = await serverResponse.json()
            throw Error(body.message)
        }
    }

    // makes sure that all input fields are valid
    fieldsAreValid() {
        const s = this.state
        if(s.password !== s.password_confirm || s.password.trim() === ''){
            this.setState({ error_msg: "Passwords do not match or are a blank space" })
            return false
        }
        else if(s.email.trim() === '' || s.first_name.trim() === '' || s.last_name.trim() === '') {
            this.setState({ error_msg: 'One or more fields are not filled in'})
            return false
        } else {
            return true
        }
    }


    sendNewAccountToServer() {
        return fetch('/account/create', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                path: this.state.picture.path,
                status: true

            })
        })
    }


    changePicture(picture) {
        this.setState({
            showModal: false,
            picture: picture
        })
    }


    closeModal(){
        this.setState({ showModal: false })
    }

   
    render() {
        return(
            <div className='container-fluid'>
                <BackButton
                    text='Back to Login'
                    type='btn-sm mt-2'
                />
                <div className='row justify-content-center mb-3'>
                    <div className='flex-row'>
                        <img 
                            src= { this.state.picture.image === Default_User ? Default_User : "data:image/png;base64," + this.state.picture.image} 
                            className="img-fluid rounded"
                            style={{'width':'150px', 'height':'150px'}}
                            alt="Responsive"
                        />
                        <div className='justify-content-end'>
                            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={ () => this.setState({ showModal: true })}>
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
                { this.state.showModal ?
                    <ImageModal 
                        showModal = { this.state.showModal }
                        modalTitle = "Choose an Image"
                        closeModal = { () => this.closeModal() }
                        onSubmit = { (picture) =>  this.changePicture(picture) }
                        images = { this.state.images }
                        default = { this.state.picture }
                    />
                    : 
                    null 
                }
            </div>
        )
    }
}

export default AccountCreationPage