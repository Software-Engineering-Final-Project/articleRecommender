import React, { useState, useEffect } from 'react'
import CategoryComponent from '../category_view'


/** A Modal to display all images Requires the following props:
 * @param { boolean } showModal: True if the modal should be displayed
 * @param { string } modalTitle: The title of the modal
 * @param { callback } closeModal: A function that determines what happens after the modal is closed
 * @param { callback (x) } onSubmit: A function with one parameter that determines what happens on form submission
 * @param { [categories] } categories: A array of starred categories
 */
function StarredTopicModal(props) {
    const [categories, setCats] = useState([])     
    useEffect( () => {
        async function fetchData() {
            const data = await filterOutCategories(props.categories)
            setCats(data)
        }
        fetchData()
    }, [])
   
    function selectOrDeselect(index){
        let temp = [...categories]
        temp[index].selected= !temp[index].selected
        setCats(temp)
    }

    return(
        <div className={`modal ${props.showModal ? 'show' : ''}`}
            style={{display: `${props.showModal ? 'block' : 'none'}`, backgroundColor: 'rgb(0,0,0,.8)', 'overflowY':'auto', 'maxHeight':'100vh'}}
            tabIndex="-1" 
            role="dialog" 
            aria-label="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header" id='blue-modal-header'>
                        <h4 className="modal-title" id="exampleModalLabel">{props.modalTitle}</h4>
                        <button type="button" className="close" onClick={() => props.closeModal() } aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body justify-content-center">
                       {
                           categories.map( (cat, index) => {
                                return(
                                    <div className='row justify-content-center' key={index}>
                                        <CategoryComponent 
                                            name = { cat.name }
                                            description = { cat.description }
                                            selected = { cat.selected }
                                            index = { index }
                                            onChange = { (index) => selectOrDeselect(index) }
                                        />
                                    </div>
                                )
                            })
                       }
                        <div className='row justify-content-center mt-3'>
                            <button 
                                type="Add" 
                                onClick={() => {
                                    let starred_cats = categories.filter(cat => cat.selected)
                                    props.onSubmit(starred_cats)
                                }} 
                                className={`btn btn-outline-success`}>More Info
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

async function fetchCategoriesFromServer() {
    return fetch('category/allCategories')
        .then( result => result.json())
        .then(data => data.map(ele => {
                ele.selected = false
                return ele
        }))
        .catch(error => alert("Error connecting to the database. Please try again later"))
}

// Filter out the categories that are already starred
async function filterOutCategories(selected_categories) {
    const categories = await fetchCategoriesFromServer()
    return categories.filter( cat => {
        for (let c of selected_categories) {
            if(c.id === cat.id || c.name === cat.name){
                return false
            }
        }
        return true
    })
}


export default StarredTopicModal
