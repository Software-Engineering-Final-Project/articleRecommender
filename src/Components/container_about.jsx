import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BabyYoda from '../Images/BabyYoda.jpg'
import YodaCup from '../Images/yodacup.jpeg'
import Yoda2 from '../Images/yoda2.jpg'
import Yoda3 from '../Images/yoda3.jpeg'
import Thor from '../Images/thor.jpg'

function AboutContainer() {

    return(
        <div className='container'>
            <div className='flex-row mt-2'>
                <h3>Who are we?</h3>
                <p className="ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dapibus ipsum. Vestibulum sed suscipit risus, gravida malesuada lectus. Donec feugiat ante eu euismod finibus. Integer nibh quam, maximus id libero sit amet, porta commodo arcu. Mauris maximus tellus et augue pretium auctor. Curabitur ac varius lorem, eu imperdiet orci. Curabitur sed scelerisque velit, a gravida massa. Suspendisse in condimentum mi. Pellentesque augue odio, gravida non sodales ut, sagittis vitae nunc.</p>
            </div>
            <div className='flex-row mt-2'>
                <h3>Our Mission</h3>
                <p className="ml-2">Cras dui ligula, tincidunt eget pretium sed, suscipit eget dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus in ornare eros. Quisque turpis purus, commodo sit amet ipsum nec, tristique molestie libero. Sed sed nulla ex. In porttitor massa ut libero malesuada hendrerit. In leo turpis, sagittis sit amet molestie consequat, porttitor id mauris.</p>
            </div>
            <div className='flex-row mt-2'>
                <h3>How to Contact Us</h3>
                <p className="ml-2">Currently we are a small start up organization and therefore do not have a mailing address. If you have any questions please email us at www.shuSEFinal@shu.edu</p>
            </div>
            <div className='flex-row mt-2'>
            <h3>About the Team</h3>
                <p className="ml-2">Feel free to check us out the project <GithubLink/>, or contact our staff below:</p>
                <div className='row d-flex justify-content-center'>
                    <div className='m-2'>
                        <StaffInfoCard
                            image ={BabyYoda}
                            full_name = "Joshua Schappel"
                            bio = "A Seton Hall student who is interested in writing clean and efficient code."
                            link ="https://github.com/jschappel"
                        />
                    </div>

                    <div className='m-2'>
                        <StaffInfoCard
                            image ={Yoda2}
                            full_name = "Jonathan Bar Eli"
                            bio = "Interested in fullstack development and swimming. Also part time entrepreneur "
                            link ="https://github.com/jonbareli"
                        />
                    </div>

                    <div className='m-2'>
                        <StaffInfoCard
                            image ={YodaCup}
                            full_name = "Jeremy Suero"
                            bio = "Student tutor who is the master of all things Racket."
                            link ="https://github.com/iamyobany"
                        />
                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='m-2'>
                        <StaffInfoCard
                            image ={Yoda3}
                            full_name = "Melk Daly"
                            bio = "Seton Hall student who likes thinking about the big picture."
                            link ="https://github.com/melkdelly"
                        />
                    </div>
                    
                    <div className='m-2'>
                        <StaffInfoCard
                            image ={Thor}
                            full_name = "Sachin Mahashabde"
                            bio = "A man who truly believes in the super powers of recursion. Imperative coding is for losers"
                            link ="https://github.com/sachinmahashabde"
                        />
                    </div>

                </div>
                
                
            </div>
        </div>
    )
}



function GithubLink() {
    const githubIcon = <FontAwesomeIcon icon={['fab', 'github']} />
    return(
        <a 
        style={{'color': '#60b0f4'}}
        href='https://github.com/Software-Engineering-Final-Project/articleRecommender'>Github {githubIcon}
        </a>
    )
}


/** A bootstrap card component for displaying employees information. The following props are needed
 * 1) image: An image of the developer
 * 2) full_name: The developers first and last name
 * 3) bio: A small blurb about the person
 * 4) link: A link to the developers github
 */
function StaffInfoCard(props) {
    return(
        <div className="card" style={{'width':'18rem'}}>
            <img className="card-img-top" src={props.image} alt="Staff Photo"/>
            <div className="card-body">
                <h5 className="card-title">{props.full_name}</h5>
                    <p class="card-text">{props.bio}</p>
                    <a href={props.link} class="card-link">View Github Profile</a>
            </div>
        </div>
    )
}


export default AboutContainer