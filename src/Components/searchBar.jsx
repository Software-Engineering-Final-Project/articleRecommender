import React from 'react'


/**
 * The Search bar and the search button. Takes the following props:
 * 1) onClick: A function to execute on click
 */
function searchBar(props) {
    return(
        <div className="form-group row">
            <div className="col-sm-10">
                <input 
                    type="text" 
                    className="form-control" 
                    id="SearchBar" aria-describedby="searchHelp"  
                    style={{'width':'100%'}}>
                </input>
            </div> 
            <div className="col-sm-2">  
                <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={props.onClick}>Search
                </button>
            </div>
        </div>
    )
}

export default searchBar