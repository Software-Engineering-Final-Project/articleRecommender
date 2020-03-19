import React, { Component, Fragment } from 'react'
import Category from '../Components/category'
import '../CSS/account_create2.css'

class AccountCreationPage2 extends Component {

    constructor(props) {
        super(props)
        this.categories = [
            { name: 'Academic', description: "test1" },
            { name: 'Research', description: "test1" },
            { name: 'General', description: "test1" },
            { name: 'Chicken', description: "test1" },
            { name: 'Academic', description: "test1" },
            { name: 'Research', description: "test1" },
            { name: 'General', description: "test1" },
            { name: 'Chicken', description: "test1" },
            { name: 'Academic', description: "test1" },
            { name: 'Research', description: "test1" },
            { name: 'General', description: "test1" },
            { name: 'Chicken', description: "test1" },
            
        ]
    }


    render() {
        console.log(this.props)
        return (
            <Fragment>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <h3 className='display-4 text-center'>Please choose the catagories that interest you</h3>
                    </div>  
               </div>
                <div className='container-fluid vertical-center3'>
                    <div className='container'>
                        <div className='row justify-content-center mb-12 categoriesMoveIn'>
                            { this.categories.map(inputArray => {
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
                </div>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-center'>
                        <button type='Submit' className='btn btn-secondary'>Create Account</button>
                    </div>
                    </div>
            </Fragment>
        )
    }

}

export default AccountCreationPage2