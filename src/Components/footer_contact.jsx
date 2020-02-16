import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function informationContact_footer() {
    const githubIcon = <FontAwesomeIcon icon={['fab', 'github']} />
    return(
        <div className='container-fluid'  style={{'position': 'fixed', 'bottom':'10px'}}>
            <div className='row'>
                <hr style={{'width':'100%', 'backgroundColor':'#86939d'}}/>
            </div>
            <div className='row ml-4 mb-1'>
                <div className='col'>
                    <button type="button" class="btn btn-outline-dark">Need Information?</button>
                </div>
                <div className='flex-col justify-content-end'>
                    <a 
                        className='mr-5 mt-5' 
                        style={{'color': '#353535'}} href='https://github.com/Software-Engineering-Final-Project/articleRecommender'> Check us out on Github! {githubIcon}
                    </a>
                </div>
            </div>
        </div>
    )
}