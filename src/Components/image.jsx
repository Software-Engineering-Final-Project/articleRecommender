import React, { useState } from 'react'

/** An image that is 150x150. Requires the following props:
 * @param { string } image: the image to display
 * @param { function } onClick: the function to be called during an onclick
 */
function OneFiftyImage(props) {
    const [isPressed, setBool] = useState(false)

    const selectedCSS = {
        width: '150px',
        height: '150px',
        boxShadow: '0 4px 8px 0 rgba(247, 139, 177), 0 6px 20px 0 rgba(247, 139, 177)'
    }

    const unSelectedCSS = {
        width: '150px',
        height: '150px',
    }

    return(
        <img 
            src= {props.image} 
            className="img-fluid rounded-circle"
            style={ isPressed ? selectedCSS : unSelectedCSS }
            onClick={ () => setBool(!isPressed) } 
            alt="Responsive"
        />
    )
}

export default OneFiftyImage