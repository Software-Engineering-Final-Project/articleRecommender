import React, { Component, Fragment } from "react"
import Navbar from '../Components/navbar'
import ProfileForm from '../Components/form_profile'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageModal from '../Components/Modals/account_create_picture'


class ProfilePage extends Component {

    constructor(props) {
        super(props)
        const { account, sessionKey } = JSON.parse(sessionStorage.getItem('auth'))
        this.user = account
        this.sessionKey = sessionKey

        this.state = {
            editable: false,
            showUpdate: false,
            showModal: false,
            images: [],
            image: this.user.image,
            path: this.user.path,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            email: this.user.email,
            username: this.user.username,
        }

       
        this.image = "data:image/png;base64," + this.user.image
        // font awesome icons
        this.imageIcon = <FontAwesomeIcon icon={['fas', 'images']} size='sm' />
        this.editIcon = <FontAwesomeIcon icon={['fas', 'user-edit']} />

        // local bindings
        this.componentDidMount = this.componentDidMount.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.renderButton = this.renderButton.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmission = this.handleSubmission.bind(this)
    }

    componentDidMount() {
        fetch('image/all')
        .then( result => result.json())
        .then( data => {
            this.setState({
                images: data,
            })
        })
        .catch(() => alert("Unable to connect to the server. Please try again later!"))
    }

    // Handles input box updates in child forms
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
        
    }

    renderModal() {
        if(this.state.showModal) {
            return(
                <ImageModal 
                    showModal = { this.state.showModal }
                    modalTitle = "Choose an Image"
                    closeModal = { () => this.closeModal() }
                    onSubmit = { (picture) =>  this.changePicture(picture) }
                    images = { this.state.images }
                    default = { this.user }
                />
            )
        }
    }

    changePicture(picture) {
        this.setState({
            showModal: false,
            image: picture.image,
            path: picture.path,
            showUpdate: true,
            editable: true,
        })
    }


    closeModal(){
        this.setState({ showModal: false })
    }

    // decides if the update or edit button should be shown
    renderButton() {
        if(!this.state.showUpdate) {
            return(
                <button 
                    type="button" 
                    onClick={ () => this.setState({editable: true, showUpdate: true}) }
                    className="btn btn-outline-dark">{this.editIcon }  Edit Information
                </button>
            )
        } else {
            return(
                <button 
                    type="button" 
                    onClick={ () => this.handleSubmission() }
                    className="btn btn-outline-dark">Update Information
                </button>
            )
        }
    }

    async handleSubmission() {
        // Check if the values of the original account are the same as the new one
        if(this.user.username === this.state.username && this.user.first_name === this.state.first_name &&
            this.user.last_name === this.state.last_name && this.user.email === this.state.email &&
            this.user.path === this.state.path)
        {
            this.setState({editable: false, showUpdate: false})
        } else {
            // Create the new account object
            const updatedAccount = {
                id: this.user.id, 
                username: this.state.username,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                path: this.state.path,
                img: null,
                state: null,
            }

             // Send to the server and await feedback
            const response = await this.sendToSever(updatedAccount)
            if(response.status !== 200) {
                const data = await response.json()
                alert(`server error: ${data.message}`)
            } else {
                const data = await response.json()
                console.log(data)
                this.updateLocalStorageAndReload(data)
            }
        }
    }

    updateLocalStorageAndReload(account) {
        const authObj = JSON.parse(sessionStorage.getItem('auth'))
        authObj.account = account
        sessionStorage.setItem('auth', JSON.stringify(authObj))
        window.location.reload()
    }

    sendToSever(account) {
        return fetch(`/account/updateAccount?id=${account.id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(account)
        })
    }

    render() {
        return (
            <Fragment>
                <Navbar
                    user={ this.user.username }
                    picture={this.image}
                />
           
            <div className='container-fluid'>
                <div className='row justify-content-center mt-2'>
                    <div className='flex-row justify-content-center mb-5'>
                        <div className='w'>
                            <img 
                                src={"data:image/png;base64," + this.state.image} 
                                className="img-fluid" alt="Responsive" 
                                style={{'width': '150px','height': '150px'}} />
                        </div>
                        <div className='justify-content-end'>
                            <button type="button" 
                                className="btn btn-outline-secondary btn-sm" 
                                onClick={ () => this.setState({ showModal: true })}>
                                {this.imageIcon}
                            </button>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-lg-5 col-md-6 col-sm-12'>
                        <div className='container'>
                            <ProfileForm
                                editable={ this.state.editable }
                                first_name={ this.state.first_name }
                                last_name={ this.state.last_name }
                                username={ this.state.username }
                                email={ this.state.email }
                                onChange= { this.handleChange }
                            />
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {this.renderButton()}
                </div>

                { this.renderModal() }
            </div>
            </Fragment>
        )
    }
}

export default ProfilePage

