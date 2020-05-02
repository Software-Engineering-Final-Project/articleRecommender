import React, { Component, Fragment } from 'react'
import Navbar from '../Components/navbar'
import SearchBar from '../Components/searchBar'
import {SearchResult, SubSearchResult} from '../Components/search_result'
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

        this.default_values = [454, 445, 426, 425, 423, 407, 405, 399, 394, 386, 381, 383, 379, 365]
        this.componentDidMount = this.componentDidMount.bind(this)
        this.addArticle = this.addArticle.bind(this)
        this.showModal = this.showModal.bind(this)
        this.addSubArticle = this.addSubArticle.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount() {
        const rand_index = Math.floor(Math.random() * (this.default_values.length -1))
        fetch(`/article/searchArticle?id=${this.default_values[rand_index]}`)
        .then(response => response.json())
        .then(data => {
            // add sub array
            const updatedData = data.map(obj => {
                obj.sub = []
                return obj
            })
            this.setState({results: updatedData})
        })
    }


    addArticle(id) {
        fetch(`/article/searchArticle?id=${id}`)
        .then(response => response.json())
        .then(data => {
            const filtered_content = data.filter( ele => {
                for (let i = 0; i < this.state.results.length; i++) {
                    if (ele.id === this.state.results[i].id) {
                        return false
                    }
                }
                return true
            })
            const parentArticle_index = this.getArticle(id)
            let state = this.state.results
            state[parentArticle_index].sub = filtered_content
            this.setState({results: state})
        })
    }


    addSubArticle(id, parent_id) {
        parent_id = this.getParentIndex(parent_id)
        fetch(`/article/searchArticle?id=${id}`)
        .then(response => response.json())
        .then(data => {
            const filtered_content = data.filter( ele => {
                console.log(ele)
                for (let i = 0; i < this.state.results[parent_id].sub.length; i++) {
                    if (ele.id === this.state.results[parent_id].sub[i]) {
                        return false
                    }
                }
                return true
            })
            console.log(filtered_content)
            let state = this.state.results
            this.state.results[parent_id].sub = this.state.results[parent_id].sub.concat(filtered_content)
            this.setState({results: state})
        })
    }

    getParentIndex(id) {
        for (let i = 0; i < this.state.results.length; i++) {
            if (this.state.results[i].id == id) {
                return i
            }
        }
        return -1
    }

    getArticle(id) {
        for (let i = 0; i < this.state.results.length; i++) {
            const current = this.state.results[i]
            if (current.id == id) {
                return i
            }
        }
    }


    closeModal(){
        this.setState({ showModal: false })
    }

    showModal(id) {
        for(let i = 0; i < this.state.results.length; i++) {
            
            if(id === this.state.results[i].id) {
                this.setState({modalData: this.state.results[i] ,showModal: true})
            }

            for(let j = 0; j < this.state.results[i].sub.length; j++) {
                if(this.state.results[i].sub[j].id === id) {
                    this.setState({modalData: this.state.results[i].sub[j] ,showModal: true})
                }
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
        console.log(this.state.results)
        return(
        <Fragment>
        <Navbar 
            user={ this.user.username }
            picture={this.image}
        />

        <div className='vertical-center2'>
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className="jumbotron" style={{'backgroundColor':'white'}}>
                    <div className="container">
                        <h1 className="display-4 text-center">Autism Searches</h1>
                        <p className="lead text-center text-muted">A modern article recommender for ASD related topics.</p>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center' style={{'margin':'0px', 'padding':'0px'}}>
                <p style={{'fontSize':'30px', 'color':'#2E3192'}}>Recommended articles for you</p>
            </div>
            <div className='row justify-content-center' style={{'margin':'0px', 'padding':'0px'}}>
                <p className='text-muted'> Recommendations are based off of your preferred topics</p>
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
                                {
                                    result.sub.map( (result2, key) => {
                                        return(<div className='row ml-5' key={key}>
                                        <SubSearchResult 
                                            parent_id = {result.id}
                                            sub_id = {result2.id}
                                            title = {result2.article_title}
                                            author = {result2.authors}
                                            onClick = {this.addSubArticle}
                                            onClick2 = {this.showModal}
                                        />
                                        </div>)
                                    })
                                }
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