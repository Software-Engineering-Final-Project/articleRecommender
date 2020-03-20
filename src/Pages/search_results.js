import React, { Component, Fragment } from 'react'
import SearchBar from '../Components/searchBar'
import Navbar from '../Components/navbar'
import Results from '../Components/search_result'
import PageNumbers from '../Components/page_numbers'
import auth from '../Components/auth'

class SearchResults extends Component {

    constructor(props){
        super(props)

        this.state = {
            
            resultList: ["Result 1", "Result 2", "Result 3", "Result 4","Result 5", "Result 6", "Result 7",
             "Result 8","Result 9", "Result 10", "Result 11","Result 12", "Result 13"],
            //resultList: [],
            search: "Autism Speaks"
        }

        this.limit = 10 // The number of results per page
        this.image = "data:image/png;base64," + auth.account.image

    }


    render() {
        return(
            <Fragment>
            <Navbar 
                user="Baby Yoda"
                picture={this.image}
            />
            <div className='container'>
                <div className='flex-row justify-content-center mt-5'>
                    <form className='justify-content-center'>
                        <SearchBar />
                    </form>
                </div>
                <div className='row ml-2'>
                    <PageNumbers
                        numOfElements = { this.state.resultList.length }
                        limit = { this.limit }
                        activePageNumber = { 1 }
                    />
                </div>
            </div>
            <div className='container'>
                <Results
                    number = { this.limit }
                    list = {this.state.resultList}
                    search= {this.state.search}
                />
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <PageNumbers
                        numOfElements = { this.state.resultList.length }
                        limit = { this.limit }
                        activePageNumber = { 1 }
                    />
                </div>
            </div>
            </Fragment>
        )
    }
}

export default SearchResults