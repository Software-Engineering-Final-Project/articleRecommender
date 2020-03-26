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
        }

       
        this.image = "data:image/png;base64," + this.user.image
        // font awesome icons
        this.imageIcon = <FontAwesomeIcon icon={['fas', 'images']} size='sm' />
        this.editIcon = <FontAwesomeIcon icon={['fas', 'user-edit']} />

        // local bindings
        this.componentDidMount = this.componentDidMount.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.renderButton = this.renderButton.bind(this)

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
                    onClick={ () => alert("TODO") }
                    className="btn btn-outline-dark">Update Information
                </button>
            )
        }
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
                            <img src={"data:image/png;base64," + this.state.image} className="img-fluid" alt="Responsive" style={{'width': '150px','height': '150px'}} />
                        </div>
                        <div className='justify-content-end'>
                            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={ () => this.setState({ showModal: true })}>
                                {this.imageIcon}
                            </button>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-lg-5 col-md-6 col-sm-12'>
                        <div className='container'>
                            <ProfileForm
                                editable= {this.state.editable }
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

