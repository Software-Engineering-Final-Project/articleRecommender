import React, { Component } from "react"
import Login from '../Components/login'
import './home.css'
import logo from '../Images/Logo.PNG'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Home extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            hasError: false
        }
        this.githubIcon = <FontAwesomeIcon icon={['fab', 'github']} />

        this.handleChange = this.handleChange.bind(this)
        this.formSubmitted = this.formSubmitted.bind(this)
    }

    handleChange(event) {
        console.log(event)
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    formSubmitted(event){
        event.preventDefault() // makes the page not refresh on every click

        if(this.state.username !== "" && this.state.password !== ""){
            console.log('ready to continue')
        } else {
            this.setState({ hasError: true})
        }
    }

    render() {
        return (

            <div className='login-header'>
            <div className='d-flex justify-content-end m-1'>
                    <a style={{color: '#60b0f4'}} href='https://github.com/jschappel/ABC-Corp'> Check me out on Github! {this.githubIcon}</a>
                </div>
            <div className='d-flex justify-content-center'>
                <img src={logo} className="img-fluid" alt="Responsive"/>
            </div>
            <div className="row justify-content-center">
                <Login
                    onSubmit = {this.formSubmitted}
                    usernameValue = {this.state.username}
                    passwordValue = {this.state.password}
                    message = {this.state.hasError}
                    onChange={this.handleChange}
                />
            </div> 
            </div>
        )
    }
}

export default Home