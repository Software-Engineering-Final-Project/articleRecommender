import React, { useState } from 'react'


/** A Modal to display all images Requires the following props:
 * @param { boolean } showModal: True if the modal should be displayed
 * @param { string } modalTitle: The title of the modal
 * @param { callback } closeModal: A function that determines what happens after the modal is closed
 * @param { callback (x) } onSubmit: A function with one parameter that determines what happens on form submission
 * @param { [categories] } categories: A array of starred categories
 */
async function StarredTopicModal(props) {
    const categories = await filterOutCategories(props.categories)

    return(
        <div className={`modal ${props.showModal ? 'show' : ''}`}
            style={{display: `${props.showModal ? 'block' : 'none'}`, backgroundColor: 'rgb(0,0,0,.8)', 'overflowY':'auto', 'maxHeight':'100vh'}}
            tabIndex="-1" 
            role="dialog" 
            aria-label="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header" id='blue-modal-header'>
                        <h4 className="modal-title" id="exampleModalLabel">{props.modalTitle}</h4>
                        <button type="button" className="close" onClick={() => props.closeModal() } aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                       {
                           categories.map( (cat, index) => {
                               return <p key={index}>{cat.name}</p>
                           })
                       }
                    </div>
                </div>
        </div>
    </div>
    )
}


async function fetchCategoriesFromServer() {
    return fetch('category/allCategories')
        .then( result => result.json())
        .then(data => {
            this.setState({
                categories: data
            })
        })
    .catch(error => alert("Error connecting to the database. Please try again later"))
}

// Filter out the categories that are already starred
async function filterOutCategories(starred_categories) {
    const categories = await fetchCategoriesFromServer()
    return categories.filter( cat => {
        for (let c in starred_categories) {
            if(c.name === cat.name){
                return false
            }
        }
        return true
    })
}


export default StarredTopicModal
