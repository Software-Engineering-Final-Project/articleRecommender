import React from 'react'

/** A Modal to display all images Requires the following props:
 * @param { boolean } showModal: True if the modal should be displayed
 * @param { string } modalTitle: The title of the modal
 * @param { callback } closeModal: A function that determines what happens after the modal is closed
 */
function ArticleModal(props) {
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
                        <h4 className="modal-title" id="exampleModalLabel">{props.data.article_title}</h4>
                        <button type="button" className="close" onClick={() => props.closeModal() } aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='row m-2'>
                            <p>{props.data.article_desc}</p>
                        </div>
                        <div className='row m-2'>
                            <a href={props.data.url}>Link to Article</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleModal
