import React, { Component, Fragment } from 'react'
import Navbar from '../Components/navbar'
import BabyYoda from '../Images/BabyYoda.jpg'
import Login from '../Components/form_login'
import logo from '../Images/Logo.PNG'
import CreateAccountRedirect from '../Components/account_create_link'
import Footer from '../Components/footer_contact'

class Preferences extends Component {

    constructor(props) {
        super(props)
        this.inputArray = ['Academic', "Research", "General", "chicken"];
    }



    render() {
        return (
            <Fragment>
                <Navbar
                    user="Baby Yoda"
                    picture={BabyYoda} />
                <div className='container-fluid vertical-center'>
                    <div className='container'>
                        <div className='row justify-content-center mb-12'>


                            <div>

                                {this.inputArray.map(inputArray => <div> <div className="btn-lrg btn-group-toggle btn-group-justified btn-lrg" data-toggle="button"> <button type="button" className="btn btn-primary btn-block"><input type="checkbox" checked autoComplete="off"></input>{inputArray}</button> </div>
                                </div>)}
                            </div>
                        </div>










                    </div>
                </div>




            </Fragment>
        )
    }

}

export default Preferences