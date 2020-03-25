import React, { useState } from 'react'
import Image from '../image'


/** A Modal to display all images Requires the following props:
 * @param { boolean } showModal: True if the modal should be displayed
 * @param { string } modalTitle: The title of the modal
 * @param { callback } closeModal: A function that determines what happens after the modal is closed
 * @param { callback (x) } onSubmit: A function with one parameter that determines what happens on form submission
 * @param { [{image: , path:}] } images: The images to be rendered in the modal
 * @param { {image: , path:} } default: The default image
 */
function ImageModal(props) {

    const images = props.images
    const [selected, changeSelected] = useState(props.default)

    const customStyles = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: '500px', // <-- This sets the height
          overflow: 'scroll' // <-- This tells the modal to scroll
        }
      };

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
                        <form onSubmit={ (e) => {
                            e.preventDefault()
                            props.onSubmit(selected) 
                        }}>
                            <div className='form-group d-flex row justify-content-center'>
                                { images.map( (picture, key) => {
                                    return(
                                        <div className='d-flex col-md-4 col-sm-6 justify-content-center mb-4' key={key}>
                                            <Image 
                                                image = { "data:image/png;base64," + picture.image }
                                                path = { picture.path }
                                                isSelected = { picture.path === selected.path ? true : false }
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