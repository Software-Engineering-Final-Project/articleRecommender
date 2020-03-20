import React from 'react'

/** An image that is 150x150. Requires the following props:
 * @param { string } image: the image to display
 * @param { integer } path: The path to the image in the database
 * @param { boolean } isSelected: true if the picture is selected
 * @param { function } onClick: the function to be called during an onclick
 */
function OneFiftyImage(props) {
    
    const selectedCSS = {
        width: '150px',
        height: '150px',
        border: '1px solid red'
    }

    const unSelectedCSS = {
        width: '150px',
        height: '150px',
    }

    return(
        <img 
            src= {props.image}
            name = { props.path }
            className="img-fluid rounded-circle"
            style={ props.isSelected ? selectedCSS : unSelectedCSS }
            onClick={ () => props.onClick(props.path) } 
            alt="Responsive"
        />
    )
}

export default OneFiftyImage