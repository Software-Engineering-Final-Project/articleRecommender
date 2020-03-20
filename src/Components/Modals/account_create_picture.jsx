import React, { useState } from 'react'
import Image from '../image'


/** A Modal to display all images Requires the following props:
 * @param { boolean } showModal: True if the modal should be displayed
 * @param { string } modalTitle: The title of the modal
 * @param { callback } closeModal: A function that determines what happens after the modal is closed
 * @param { callback (x) } onSubmit: A function with one parameter that determines what happens on form submission
 */
function ImageModal(props) {

    const images = [
        {image: 'https://via.placeholder.com/150', path: 0},
        {image: 'https://via.placeholder.com/150', path: 1},
        {image: 'https://via.placeholder.com/250', path: 2},
        {image: 'https://via.placeholder.com/150', path: 3},
        {image: 'https://via.placeholder.com/150', path: 4},
        {image: 'https://via.placeholder.com/150', path: 5},
        {image: 'https://via.placeholder.com/150', path: 6},
        {image: 'https://via.placeholder.com/150', path: 7},
    ]

    const [selected, changeSelected] = useState(images[0])

    return(
        <div className={`modal ${props.showModal ? 'show' : ''}`} 
             style={{display: `${props.showModal ? 'block' : 'none'}`, backgroundColor: 'rgb(0,0,0,.8)'}}
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
                    <div className="modal-body">
                        <form onSubmit={ (e) => {
                            e.preventDefault()
                            props.onSubmit(selected) 
                        }}>
                            <div className='form-group d-flex row justify-content-center'>
                                { images.map( (picture, key) => {
                                    return(
                                        <div className='d-flex col-md-4 col-sm-6 justify-content-center mb-4' key={key}>
                                            <Image 
                                                image = { picture.image }
                                                path = { picture.path }
                                                isSelected = { picture.path == selected.path ? true : false }
                                                onClick = { () => changeSelected(picture) }
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='form-group d-flex row justify-content-center'>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary">Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ImageModal