import React from 'react'

/** Category requires the following props
 * @param { string } name: The name of the category
 * @param { string } description: The description for the category
 */
function Category(props) {
    return(
        <div className='container-fluid'>
            <div className='row'>
                <h4>{ props.name }</h4>
            </div>
            <div className='row'>
                <p>{ props.description }</p>
            </div>
        </div>
    )
}

export default Category