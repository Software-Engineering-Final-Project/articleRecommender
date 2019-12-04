import React, { Component } from "react"
import './home.css'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            name: "Josh"
        }
    }

    render() {
        return (
            <body>
                <div className="fullscreen">
                    <div className="row justify-content-center" style={{backgroundColor:"red"}}>
                        <h1>Hello {this.state.name}, Welcome to the home page</h1>
                    </div>
                </div>
            </body>
        )
    }
}

export default Home