import React, { Component, Fragment } from 'react'
import Navbar from '../Components/navbar'
import auth from '../Components/auth'
import CategoryComponent from '../Components/category_view'

class StarredTopics extends Component {


    constructor(props) {
        super(props)

        this.state = {
            favArticles: [],
            favCatagories: [],
        }
        this.image = "data:image/png;base64," + auth.account.image

        // local bindings
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        fetch(`/account/getCategories?id=${auth.account.id}`)
        .then( response => response.status !== 200 ? alert("Error connecting to server") : response.json())
        .then( data => this.setState({favCatagories: data}))
    }

    render() {
        return(
            <Fragment>
                <Navbar 
                    user= {auth.account.username}
                    picture={this.image}
                />
                <div className='container'>
                    <div className='row justify-content-center mb-4'>
                        <div className="jumbotron jumbotron-fluid" style={{'backgroundColor':'white'}}>
                            <div className="container">
                                <h1 className="display-4 text-center">Starred Topics</h1>
                                <p className="lead text-center">Below are your favorite items. To remove an item click on the start and then hit submit at teh bottom of the page.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <p className='h3'>Articles</p>
                            </div>
                            <div className='row justify-content-center mt-4'>
                                <h1 className='display-4 text-muted'>Coming Soon!</h1>
                            </div>
                        </div>
                       
                    </div>
                    <div className='row'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <p className='h3'>Catagories</p>
                            </div>
                            { this.state.favCatagories.map( (category, key) => {
                                return(
                                <div className='row justify-content-center'>
                                    <CategoryComponent 
                                        name = { category.name }
                                        description = { category.description }
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