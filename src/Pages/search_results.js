import React, { Component, Fragment } from 'react'
import SearchBar from '../Components/searchBar'
import Navbar from '../Components/navbar'
import BabyYoda from '../Images/BabyYoda.jpg'
import Results from '../Components/search_result'

class SearchResults extends Component {

    constructor(props){
        super(props)

        this.state = {
            
            resultList: ["Result 1", "Result 2", "Result 3", "Result 4","Result 5", "Result 6", "Result 7",
             "Result 8","Result 9", "Result 10", "Result 11","Result 12", "Result 13"],
            
            //resultList: [],
            search: "Autism Speaks"
        }

    }


    render() {
        return(
            <Fragment>
            <Navbar 
                user="Baby Yoda"
                picture={BabyYoda}
            />
            <div className='container'>
                <div className='flex-row justify-content-center mt-5'>
                    <form>
                        <SearchBar />
                    </form>
                </div>
            </div>
            <div className='container mt-5'>
                <Results
                    number = {10}
                    list = {this.state.resultList}
                    search= {this.state.search}
                />
            </div>
            </Fragment>
        )
    }
}

export default SearchResults