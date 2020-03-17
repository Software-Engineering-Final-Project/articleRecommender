import React, { Component, Fragment } from 'react'
import Navbar from '../Components/navbar'
import BabyYoda from '../Images/BabyYoda.jpg'

class StarredTopics extends Component {


    constructor(props) {
        super(props)

        this.state = {
            favArticles: [],
            favCatagories: [],
        }
    }

    render() {
        console.log(this.props.history)
        return(
            <Fragment>
                <Navbar 
                    user="Baby Yoda"
                    picture={BabyYoda}
                />
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className="jumbotron jumbotron-fluid" style={{'backgroundColor':'white'}}>
                            <div className="container">
                                <h1 className="display-4 text-center">Starred Topics</h1>
                                <p className="lead text-center">Below are your favorite items. To remove an item click on the start and then hit submit at teh bottom of the page.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <p className='h4'>Articles</p>
                    </div>

                    <div className='row'>
                        <p className='h4'>Catagories</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default StarredTopics