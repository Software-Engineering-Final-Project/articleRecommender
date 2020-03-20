import React from 'react'

/**
 * Creates a bootstrap Pagination Component that holds the page numbers. The
 * required props are:
 * 1) numOfElements { Int } the number of elements that need to be displayed
 * 2) limit { Int } the number of elements that can be displayed on a single page
 * 3) activePageNumber { Int } The page that the screen is currently on
 */
function PageNumbers(props) {
    const numberOfPages = Math.ceil(props.numOfElements / props.limit)
    return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
               { renderNumbers(numberOfPages, props.activePageNumber) }
            </ul>
        </nav>
    )
}


/**
 * Builds a list of Number Components
 */
function renderNumbers(numbers, activePageNumber) {
    const pageNumberComponents = []
    console.log(numbers)
    for(let i = 1; i <= numbers; i++) {
        if(i === activePageNumber) {
            pageNumberComponents.push( <ActiveNumber number = { i } />)
        } else {
            pageNumberComponents.push( <InactiveNumber number = { i } />)
        }
    }
    return pageNumberComponents
}

/**
 * Creates an active Number component. The required props are:
 * 1) number { int } The number to be displayed
 */
function InactiveNumber(props) {
    console.log("here")
    return(
        <li className="page-item">
            <a className="page-link" href="#!">{ props.number }</a>
        </li>
    )
}

/**
 * Creates an inactive Number component. The required props are:
 * 1) number { int } The number to be displayed
 */
function ActiveNumber(props) {
    return(
        <li className="page-item active" aria-current="page">
            <span className="page-link">
                { props.number }
                <span className="sr-only">(current)</span>
            </span>
        </li>
    )
}


export default PageNumbers