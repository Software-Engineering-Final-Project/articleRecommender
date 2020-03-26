import React, { Component, Fragment } from "react"
import Login from '../Components/form_login'
import logo from '../Images/Logo.PNG'
import CreateAccountRedirect from '../Components/account_create_link'
import Footer from '../Components/footer_contact'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auth from '../Components/auth'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            hasError: ""
        }
        this.githubIcon = <FontAwesomeIcon icon={['fab', 'github']} />

        this.handleChange = this.handleChange.bind(this)
        this.formSubmitted = this.formSubmitted.bind(this)
        this.handleLoginResponse = this.handleLoginResponse.bind(this)
    }

    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    // Handles the form submission. It executes in the following order:
    //      1) Checks if both the username and password inputs were filled out
    //      2) Parses the server response
    //      3) If the username and password were valid then it redirects to the search page with the proper credentials
    async formSubmitted(event){
        event.preventDefault() // makes the page not refresh on every click

        if(this.state.username !== "" && this.state.password !== "") {
            try{
                const response = await this.fetchCredentials() // Fetch the results
                await this.handleLoginResponse(response) // parse the body and log in
            } catch(error) {
                this.setState({ hasError: "invalid username or password"})
            }
        } 

        // They did not fill out both the username and password inputs
        else {
            this.setState({ hasError: "Please make sure both the username and password were filled out"})
        }
    }


    // Sends an API request to the sever and returns the response
    // Returns a promise that contains the response from the server
    fetchCredentials() {
        const body = {
            username: this.state.username,
            password: this.state.password
        }
        const JSONBody = JSON.stringify(body) // The json object to send to the API

        return fetch('/authenticate/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSONBody
        })
    }

    // handles the API response and determines if the status was 200 or if there is an error to report
    async handleLoginResponse(response) {
        try {
            // Parse the response and see if the username was valid
            const parsedBody = await this.parseResponseBody(response)
            // since we are this far we know the validation was correct so we will login and proceed
            const auth = new Auth(true, parsedBody, "Key")
            sessionStorage.setItem('auth', JSON.stringify(auth)) // place auth object into local storage
            this.props.history.push('/search')
        } catch(error) {
            throw error
        }
    }

    // Parses the response into json and throws an error if the response's status !== 200
    async parseResponseBody(response){
        if( response.status !== 200) {
            const res = await response.json()
            throw new Error(`${response.status} Error: ${res.message}`)
        }
        else return response.json()
    }


    render() {
        return (
            <Fragment>
            <div className='container-fluid'>
                <div className='d-flex justify-content-center'>
                    <img src={logo} className="img-fluid" alt="Responsive"/>
                </div>
                <div className="flex-row justify-content-center"> 
                    <Login
                        onSubmit = {this.formSubmitted}
                        usernameValue = {this.state.username}
                        passwordValue = {this.state.password}
                        message = {this.state.hasError}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='flex-row justify-content-center' style={{'marginTop':'-30px'}}>
                    <hr style={{'width':'15%', 'backgroundColor':'#86939d'}}/>
                </div>
                <div className='row justify-content-center m-3'>
                    <CreateAccountRedirect
                        link = '/createAccount'
                    />
                </div>
            </div>
            <Footer />
            </Fragment>
        )
    }
}

export default Home