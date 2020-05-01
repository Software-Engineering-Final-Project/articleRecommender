import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/search.css'
import ArticleModal from './Modals/article_modal'


/**
 * @param id
 * @param title 
 * @param desc
 * @param author
 */
function SearchResult(props) {
    const addIcon = <FontAwesomeIcon icon={['fa', 'plus']} size='sm' />

    return(
        <div className='container mt-3' id='search-row'>
            <div className='row justify-content-center p-2'>
                <h4 className='text-center' style={{'color':'#444444'}}>{props.title}</h4>
            </div>
            <div className='row justify-content-center p-2'>
                <div className='col-8'>
                    <p className='ml-3 mt-2 text-center text-muted'>{props.author === 'NULL' ? "Unavailable or Author in Title" : props.author}</p>
                </div>
            </div>
            <div className='row p-2 justify-content-between'>
                <div className='flex-col-6'>
                <button 
                    type="button" 
                    onClick={() => props.onClick(props.id)} 
                    className={`btn btn-outline-success btn-sm`}>{addIcon}
                </button>
                </div>
                <div className='flex-col-6'>
                <button 
                    type="button" 
                    onClick={() => props.onClick2(props.id)} 
                    className={`btn btn-outline-secondary btn-sm`}>More Info
                </button>
                </div>
                </div>
        </div>
    )
}


export default SearchResult
