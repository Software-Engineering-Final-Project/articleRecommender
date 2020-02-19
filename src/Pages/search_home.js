import React, { Component, Fragment } from 'react'
import Navbar from '../Components/navbar'
import BabyYoda from '../Images/BabyYoda.jpg'
import Login from '../Components/form_login'
import logo from '../Images/Logo.PNG'
import CreateAccountRedirect from '../Components/account_create_link'
import Footer from '../Components/footer_contact'

class HomeSearch extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
        <Fragment>
        <Navbar 
            user="Baby Yoda"
            picture={BabyYoda}/>
    <div className='container-fluid vertical-center'>
            <div className='container-fluid'>
                <div className='col justify-content-center mb-3 text-center col-form-label-lg'>
        
         
                <form>
  <div class="form-group">
    <label for="col-form-label-lg text-center" > Search Here</label>
    <input type="text" class="form-control" id="SearchBar" aria-describedby="searchHelp" placeholder="Search Here"></input>
    <small id="searchHelp" class="form-text text-muted">Your searches are based on your preferences. See profile for more information.</small>
     </div>
	
	
    </form>
    </div>
	
    </div>
    </div>
    </Fragment>  
        )
    }

}

export default HomeSearch