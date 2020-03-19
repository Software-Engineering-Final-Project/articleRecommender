import React, { useState } from 'react'
/** A category component for the second account create page: The required props are:
 * @param { String } name: The name of the category
 * @param { String } description: A description for the category
*/
function Category(props) {
    const [isPressed, setBoolean ] = useState(false)

    const falseHighlightStyle = {
        background: 'radial-gradient(circle at 50% 55%, rgba(240, 245, 255, 0.9), rgba(240, 245, 255, 0.9) 40%, rgba(225, 238, 255, 0.8) 60%, rgba(43, 130, 255, 0.4))'
    }

    const trueHighlightStyle = {
        background: 'radial-gradient(circle at 50% 55%, rgba(242, 185, 182, 0.9), rgba(242, 185, 182, 0.9) 40%, rgba(240, 144, 139, 0.8) 60%, rgba(240, 38, 24, 0.4))'
    }

    return(
            <div 
                type="button"
                style={ isPressed ? trueHighlightStyle : falseHighlightStyle } 
                onClick={() => setBoolean(!isPressed)}
                className="bubbleButton">
                {props.name}
            </div>
    )
}



export default Category