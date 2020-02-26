import React from 'react'
import '../CSS/search_result.css'

/** 
 * A single search result to be displayed
 */
function SearchResult(props) {
    return(
        <div className='row s-result p-3'>
            <p className='h3'>{ props.title }</p>
        </div>
    )
}


/**
 * A component for an invalid search. Takes in the following props:
 * 1) search {String} the search that was queried
 */
function NoResult(props) {
    return(
        <div className='row justify-content-center mt-5'>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Oh no!</h1>
                    <p className="lead text-center">There are no articles for the search: {props.search}.</p>
                    <hr class="my-4"></hr>
                    <p className='text-center'>Please double check to make sure there are not any spelling errors. 
                        Also try using broader keywords.
                    </p>
                </div>
            </div>
        </div>
    )
}

//  <p class="h3">Oh no! There are no articles for the search: {props.search}</p>


/**
 * Displays the given number of results, or displays a message if there were no results.
 * Has the following props:
 * 1) number {Int} the number of elements to render
 * 2) list {Object Array} An array of objects that contain the information to be displayed
 * 3) search {String} The search that was queried
 */
function results(props) {
    if(props.list.length === 0){
        return <NoResult search={ props.search } />
    } else {
        return renderXElements(props.number, props.list)
    }
}



/**
 * Renders the given number of elements. If there is less then the given number of 
 *   elements, then renders as many as possible.
 */
function renderXElements(number, aList) {
    const displayElements = []
    const len = number < aList.length ? number : aList.length

    for(let i = 0; i < len; i++) {
        const item = aList[i]
        displayElements.push(
            <SearchResult
                title = { item }
            />
        )
    }
    return displayElements
}


export default results