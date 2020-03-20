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
            first_name: "J",
            last_name: "L",
            password: "L",
            password_confirm: "L",
            email: "J",
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
        .catch(error => alert("Unable to connect to the database. Please try again later!"))
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
            const { error_msg, images, showModal, ...rest } = this.state
            this.props.history.push({
                pathname: '/createAccount2',
                state: rest
            })
        }
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
                            className="img-fluid rounded-circle"
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