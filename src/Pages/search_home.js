import React, { Component, Fragment } from 'react'
import Navbar from '../Components/navbar'
import SearchBar from '../Components/searchBar'
import SearchResult from '../Components/search_result'
import ArticleModal from '../Components/Modals/article_modal'


class HomeSearch extends Component {

    constructor(props) {
        super(props)

        this.state = {
            results: [],
            showModal: false,
            modalData: {},
        }

        const { account, sessionKey } = JSON.parse(sessionStorage.getItem('auth'))
        this.sessionKey = sessionKey
        this.user = account
        this.image = "data:image/png;base64," + this.user.image

        
        this.componentDidMount = this.componentDidMount.bind(this)
        this.addArticle = this.addArticle.bind(this)
        this.showModal = this.showModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount() {
        fetch('/article/searchArticle?id=10')
        .then(response => response.json())
        .then(data => this.setState({results: data}))
    }

    addArticle(id) {
        fetch(`/article/searchArticle?id=${id}`)
        .then(response => response.json())
        .then(data => {
            const filtered_content = data.filter( ele => {
                for (let i = 0; i < this.state.results.length; i++) {
                    if (ele.id === this.state.results[i].id) {
                        console.log("Got one")
                        return false
                    }
                }
                return true
            })
            this.setState({results: this.state.results.concat(filtered_content)})
        })
    }

    closeModal(){
        this.setState({ showModal: false })
    }

    showModal(id) {
        //console.log(id)
        for(let i = 0; i < this.state.results.length; i++) {
            if(id === this.state.results[i].id) {
                this.setState({modalData: this.state.results[i] ,showModal: true})
            }
        }
    }

    renderModal(data) {
        if (this.state.showModal === false) {
            return null;
        } else {
            return(
                <ArticleModal 
                    showModal = { this.state.showModal }
                    modalTitle = "Article"
                    closeModal = { () => this.closeModal() }
                    data = {this.state.modalData}
                /> 
            )
        }
    }

    render() {
        return(
        <Fragment>
        <Navbar 
            user={ this.user.username }
            picture={this.image}
        />

        <div className='vertical-center2'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className="jumbotron jumbotron-fluid" style={{'backgroundColor':'white'}}>
                    <div className="container">
                        <h1 className="display-4 text-center">Autism Searches</h1>
                        <p className="lead text-center">A modern search browser for ASD related topics.</p>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
            <p style={{'fontSize':'30px', 'color':'#60b0f4'}}>Recommended Articles</p>
            </div>
            <div className='container-fluid mb-5' style={{'width':'50%'}}>
                {
                    this.state.results.map( (result, key) => {
                        return(
                            <div className='row' key={key}>
                            <SearchResult 
                                id = {result.id}
                                title = {result.article_title}
                                author = {result.authors}
                                onClick = {this.addArticle}
                                onClick2 = {this.showModal}
                        />
                        </div>)
                    })
                }
            </div>
        </div>
        { this.renderModal() }
        </div>
        </Fragment>  
        )
    }

}

export default HomeSearch