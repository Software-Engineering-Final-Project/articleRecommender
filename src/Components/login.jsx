import React, { Component } from "react"

/**
 * This component is for the login container. It requires the following props:
 *      1) usernameValue: The current value in the user input field
 *      2) passwordValue: The current value in the password field
 *      3) message: boolean to determine if the form is submitted before finished
 *      3) onSubmit: A function that handles the form submission
 * Also note that This props inherits the onChange function from its parent div
 */
class Login extends Component {

    constructor(props) {
        super(props)
    }

    renderMessage() {
        if(this.props.message){
            return <p style={{'fontSize': '12px', 'color': 'red'}}>Please fill in both username and password fields.</p>
        } else{
            return <p></p>
        }
    }

    render(){
        return(
            <form className='needs-validation' onSubmit={this.props.onSubmit} noValidate>
                <div className='form-group'>
                    <label>Email Address</label>
                    <input 
                        type='username' 
                        name='username' 
                        value= {this.props.usernameValue}
                        onChange={this.props.onChange}
                        className='form-control input-sm' 
                        placeholder="example@shu.edu" />
                    <small className='form-text text-muted'>We'll never share your email with anyone else.</small>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input 
                        type='password' 
                        name='password'
                        value={this.props.passwordValue}
                        onChange={this.props.onChange}
                        className='form-control' 
                        placeholder='password'/>
                </div>
                <div className='form-group'>
                    {this.renderMessage()}
                </div>
                <div className='d-flex justify-content-center'>
                    <button type='Log in' className='btn btn-secondary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default Login