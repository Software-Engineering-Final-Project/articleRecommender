import React, { Component, Fragment } from 'react'
import Category from '../Components/category'
import '../CSS/account_create2.css'

class AccountCreationPage2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
        this.set = new Set()
        this.account_id = 1 //this.props.history.location.account_id
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


    async addCategoriesToAccount() {
        if(this.set.size === 0){
            this.props.history.push('/')
            alert("Account Creation Complete!")
        } else {
            const categoryList = this.filterOutUnSelectedCategories()
            try {
                const response = await this.sendSelectedCategoriesToServer(categoryList)
                if( response != 200) {
                    const body = response.json()
                    alert(body.message)
                } else {
                    this.props.history.push('/')
                    alert('Account Creation complete!')
                }
            } catch (error) {
                alert("Error with server post request")
            }
        }
    }

    sendSelectedCategoriesToServer(body) {
        const url = `account/addCategories?id=${this.account_id}`
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
    }

    

    filterOutUnSelectedCategories(){
        this.state.categories.filter( (category) => {
            if(this.set.has(category.id)) {
                this.set.delete(category.id)
                return true
            }
            return false
        })
    }

    render() {
        return (
            <Fragment>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <h3 className='display-4 text-center'>Please choose the catagories that interest you</h3>
                    </div>  
               </div>
                <div className='container-fluid justify-content-center vertical-center3'>
                        <div className='row justify-content-center mb-12 categoriesMoveIn'>
                            { this.state.categories.map( (inputArray, num) => {
                                return(
                                    <div className='d-flex col-md-3 col-sm-4 justify-content-center' key={num}>
                                        <Category 
                                            name = {inputArray.name}
                                            description = { inputArray.description }
                                            id = { inputArray.id }
                                            set = { this.set }
                                        />
                                    </div>
                                )
                            })}
                        </div>
                </div>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-center'>
                        <button type='Submit' onClick={ () => this.addCategoriesToAccount() } className='btn btn-secondary btn-lg'>Create Account</button>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default AccountCreationPage2