import React from 'react'


export default function informationContact_footer() {
    return(
        <div className='container-fluid'  style={{'position': 'fixed', 'bottom':'10px'}}>
            <div className='row'>
                <hr style={{'width':'100%', 'backgroundColor':'#86939d'}}/>
            </div>
            <div className='row ml-4'>
                <button type="button" class="btn btn-outline-dark">Need Information?</button>
            </div>
        </div>
    )
}