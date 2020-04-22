import React, { Component, Fragment } from 'react'
import Navbar from '../Components/navbar'
import CategoryComponent from '../Components/category_view'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryModal from '../Components/Modals/starred_topic_modal'


class StarredTopics extends Component {


    constructor(props) {
        super(props)

        this.state = {
            favArticles: [],
            favCatagories: [],
            showModal: false,
        }

        const { account, sessionKey } = JSON.parse(sessionStorage.getItem('auth'))
        this.sessionKey = sessionKey
        this.user = account
        this.image = "data:image/png;base64," + this.user.image

        //font awesome icons
        this.trashIcon = <FontAwesomeIcon icon={['fa', 'trash-alt']} size='sm' />
        this.addIcon = <FontAwesomeIcon icon={['fa', 'plus']} size='sm' />

        // local bindings
        this.componentDidMount = this.componentDidMount.bind(this)
        this.selectOrDeselect = this.selectOrDeselect.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount() {
        fetch(`/account/getCategories?id=${this.user.id}`)
        .then( response => response.status !== 200 ? alert("Error connecting to server") : response.json())
        .then( data => {
            const newData = data.map( category => {
                category.status = true
                return category
            })
            this.setState({favCatagories: newData})
        })
    }

    renderModal() {
        if(this.state.showModal) {
            return(
                <CategoryModal 
                    showModal = { this.state.showModal }
                    modalTitle = "Add Categories"
                    closeModal = { () => this.closeModal() }
                    categories = { this.state.favCatagories }
                />
            )
        }
    }

    closeModal(){
        this.setState({ showModal: false })
    }

    async deleteCategories() {
        const unStarred = this.state.favCatagories.filter(cat => cat.status === false)
        const jsonToSend = unStarred.map(cat => {
            const { status, ...rest} = cat
            return rest
        })
        const url = `account/removeCategories?id=${this.user.id}`
        const response = await this.postServerFetch(url, jsonToSend)

        if(response.status !== 200) {
            const data = await response.json()
            alert(`server error: ${data.message}`)
        } else {
            // force page reload to update fields
            window.location.reload()
        }
    }


    postServerFetch(url, body) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
    }




    selectOrDeselect(index) {
        let favCats = this.state.favCatagories
        favCats[index].status= !favCats[index].status
        this.setState({favCatagories: favCats})
    }



    render() {
        return(
            <Fragment>
                <Navbar 
                    user= {this.user.username}
                    picture={this.image}
                />
                <div className='container'>
                    <div className='row justify-content-center mb-4'>
                        <div className="jumbotron jumbotron-fluid" style={{'backgroundColor':'white'}}>
                            <div className="container">
                                <h1 className="display-4 text-center">Starred Topics</h1>
                                <p className="lead text-center">Below are your favorite articles and categories.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <p className='h3'>Articles</p>
                            </div>
                            <div className='row justify-content-center mt-4 mb-4'>
                                <h1 className='display-4 text-muted'>Coming Soon!</h1>
                            </div>
                        </div>
                       
                    </div>
                    <div className='row'>
                        <p className='h3 mb-4'>Categories</p>
                    </div>
                    <div className='row ml-2'>
                        <div className='col-10'>
                            <p className='text-muted'>To Remove a category, press the star. To add a category, press {this.addIcon}. 
                                To delete a category press {this.trashIcon}.
                            </p>
                        </div>
                        <div className='col-1 justify-content-end'>
                            <button 
                                type="button" 
                                onClick={() => console.log("Pressed")} 
                                className={`btn btn-outline-success btn-small`}>{this.addIcon}
                            </button>
                        </div>
                        <div className='col-1 justify-content-end'>
                            <button 
                                type="button" 
                                onClick={() => this.deleteCategories()} 
                                className={`btn btn-outline-danger btn-small`}>{this.trashIcon}
                            </button>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='container-fluid'>
                            { this.state.favCatagories.map( (category, index) => {
                                return(
                                <div className='row justify-content-center' key={index}>
                                    <CategoryComponent 
                                        name = { category.name }
                                        description = { category.description }
                                        selected = { category.status }
                                        index = { index }
                                        onChange = { this.selectOrDeselect }
                                    />
                                </div>
                                )
                            })}
                        </div>
                       
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default StarredTopics