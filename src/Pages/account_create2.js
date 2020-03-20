import React, { Component, Fragment } from 'react'
import Category from '../Components/category'
import '../CSS/account_create2.css'

class AccountCreationPage2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        fetch('category/allCategories')
        .then( result => result.json())
        .then(data => {
            this.setState({
                categories: data
            })
        })
        .catch(error => alert("Error connecting to the database. Please try again later"))
    }

    render() {
        console.log(this.props.state)
        return (
            <Fragment>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <h3 className='display-4 text-center'>Please choose the catagories that interest you</h3>
                    </div>  
               </div>
                <div className='container-fluid justify-content-center vertical-center3'>
                        <div className='row justify-content-center mb-12 categoriesMoveIn'>
                            { this.state.categories.map(inputArray => {
                                return(
                                    <div className='d-flex col-md-3 col-sm-4 justify-content-center'>
                                        <Category 
                                            name = {inputArray.name}
                                            description = { inputArray.description }
                                        />
                                    </div>
                                )
                            })}
                        </div>
                </div>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-center'>
                        <button type='Submit' className='btn btn-secondary btn-lg'>Create Account</button>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default AccountCreationPage2