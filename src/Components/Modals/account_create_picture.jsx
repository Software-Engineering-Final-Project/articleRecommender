import React from 'react'
import Image from '../image'


/** A Modal to display all images Requires the following props:
 * @param { boolean } showModal: True if the modal should be displayed
 * @param { string } modalTitle: The title of the modal
 * @param { function } closeModal: A function that determines what happens after the modal is closed
 */
function ImageModal(props) {


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
                        <form>
                            <div className='form-group d-flex row justify-content-center'>
                                <div className='d-flex col-sm-4 justify-content-center mb-4'>
                                    <Image 
                                        image = 'https://via.placeholder.com/150'
                                    />
                                </div>
                                <div className='d-flex col-sm-4 justify-content-center mb-4'>
                                    <Image 
                                        image = 'https://via.placeholder.com/150'
                                    />
                                </div>
                                <div className='d-flex col-sm-4 justify-content-center mb-4'>
                                    <Image 
                                        image = 'https://via.placeholder.com/150'
                                    />
                                </div>
                                <div className='d-flex col-sm-4 justify-content-center mb-4'>
                                    <Image 
                                        image = 'https://via.placeholder.com/150'
                                    />
                                </div>
                                <div className='d-flex col-sm-4 justify-content-center mb-4'>
                                    <Image 
                                        image = 'https://via.placeholder.com/150'
                                    />
                                </div>
                                <div className='d-flex col-sm-4 justify-content-center mb-4'>
                                    <Image 
                                        image = 'https://via.placeholder.com/150'
                                    />
                                </div> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ImageModal