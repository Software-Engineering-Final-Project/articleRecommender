import React, { Component, Fragment } from 'react'
import Navbar from '../Components/navbar'
import BabyYoda from '../Images/BabyYoda.jpg'
import SearchBar from '../Components/searchBar'
class HomeSearch extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
        <Fragment>
        <Navbar 
            user="Baby Yoda"
            picture={BabyYoda}
        />
        <div className='vertical-center2'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div class="jumbotron jumbotron-fluid" style={{'backgroundColor':'white'}}>
                    <div class="container">
                        <h1 class="display-4">Autism Searches</h1>
                        <p class="lead text-center">A tailored search for you and your family.</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{'width':'50%'}}>
                <div className='col justify-content-center mb-3 text-center col-form-label-lg'>
            
                    <form>
                        <SearchBar />
                        <small id="searchHelp" className="form-text text-muted">Your searches are based on your preferences. See profile for more information.</small>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </Fragment>  
        )
    }

}

export default HomeSearch