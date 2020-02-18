import React, { Component } from 'react'
import Navbar from '../Components/navbar'
import BabyYoda from '../Images/BabyYoda.jpg'

class HomeSearch extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Navbar
                user="Joshua Schappel"
                picture={BabyYoda}
            />
        )
    }

}

export default HomeSearch