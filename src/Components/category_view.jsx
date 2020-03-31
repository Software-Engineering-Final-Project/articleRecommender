import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/category.css'

/** Category requires the following props
 * @param { string } name: The name of the category
 * @param { string } description: The description for the category
 * @param { boolean } selected: True if the category is selected
 * @param { integer } index: The position of the item in the list
 * @param { function } onChange: A function that is called when a category is selected or deselected
 */
function Category(props) {
    const fav = <FontAwesomeIcon icon={['fas', 'star']} size='lg' />
    const unFav = <FontAwesomeIcon icon={['far', 'star']} size='lg' />
    let style = props.selected ? "starSelected" : "starUnselected"
    return(
        <div className='container-fluid categoryDiv m-2'>
            <div className='row justify-content-between p-1'>
                <div className='col-11'>
                    <h4>{ props.name }</h4>
                </div>
                <div className='flex-col'>
                    <button 
                        className={`${style}`}
                        onClick={() => props.onChange(props.index)}>
                        { props.selected ? fav : unFav }</button>
                </div>
            </div>
            <div className='row justify-content-center'>
                <p>{ props.description }</p>
            </div>
        </div>
    )
}

export default Category