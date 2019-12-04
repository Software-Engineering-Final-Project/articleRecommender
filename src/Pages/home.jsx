import React, { Component } from "react"
import './home.css'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            inputField: ""
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(event) {
        this.setState({name: this.state.inputField})
    }

    handleChange(event) {

        console.log(event)
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
                <div className="fullscreen">
                    <div className="row justify-content-center" style={{backgroundColor:"red"}}>
                        <h1>Hello {this.state.name}, Welcome to the home page</h1>
                    </div>
                    <div className="row justify-content-center">
                        <input type="text" value={this.state.inputField} onChange={this.handleChange}  name="inputField" placeholder="Type Here" className="form-control text-center" style={{width: "200px"}}/>
                    </div>
                    <div className="row justify-content-center">
                        <button className="btn btn-primary"onClick={this.handleClick}>Press me!</button>
                    </div>
                </div>
        )
    }
}

export default Home