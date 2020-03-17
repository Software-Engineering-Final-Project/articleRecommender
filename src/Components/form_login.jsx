import React, { Component } from "react"
import '../CSS/input.css'
/**
 * This component is for the login container. It requires the following props:
 *      1) usernameValue {String}: The current value in the user input field
 *      2) passwordValue {String}: The current value in the password field
 *      3) message {boolean}: boolean to determine if the form was submitted before finished
 *      3) onSubmit {function}: A function that handles the form submission
 * Also note that This props inherits the onChange function from its parent div
 */
class Login extends Component {

    constructor(props) {
        super(props)
    }

    // Renders a message if any errors have ocurred
    renderMessage() {
        return <p style={{'color':'red'}}>{this.props.message}</p>
    }

    render(){
        return(
            <div>
                <div className='row justify-content-center'>
                <form className=' needs-validation' onSubmit={this.props.onSubmit} noValidate>
                    <div className='form-group'>
                        <label>Email Address</label>
                        <input 
                            type='username' 
                            name='username' 
                            value= {this.props.usernameValue}
                            onChange={this.props.onChange}
                            className='form-control loginInput'
                            autoCorrect='new-username'
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
                            autoComplete='password'
                            className='form-control loginInput'
                            placeholder='password'/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type='Log in' className='btn btn-secondary'>Sign in</button>
                    </div>
                </form>
                </div>
            <div className='row justify-content-center mt-2'>
                <div className='form-group'>
                        {this.renderMessage()}
                </div>
            </div>
            </div>
        )
    }
}

export default Login