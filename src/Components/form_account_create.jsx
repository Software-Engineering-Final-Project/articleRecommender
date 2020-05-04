import React, { Component } from 'react'
import '../CSS/input.css'

class AccountForm extends Component {

    // Renders a message if any errors have ocurred
    renderMessage() {
        return <p 
                className='mt-3' 
                style={{'color':'#fd4250', 'fontSize':'18px'}}>
                {this.props.errorMessage}
               </p>
    }

    render() {
        const parentComponentValues = this.props.state
        return(
            <div className='row justify-content-center'>
                <form className=' needs-validation' onSubmit={this.props.submit} noValidate>
                    <div className='form-group'>
                        <label>Username<label style={{'color':'red'}}>*</label></label>
                        <input 
                            type='username' 
                            name='username' 
                            value= {parentComponentValues.username}
                            onChange={this.props.handleChange}
                            className='form-control accountCreateInput'
                            placeholder="username" />
                    </div>
                    <div className='form-group'>
                        <label>First Name<label style={{'color':'red'}}>*</label></label>
                        <input 
                            type='username' 
                            name='first_name' 
                            value= {parentComponentValues.first_name}
                            onChange={this.props.handleChange}
                            className='form-control accountCreateInput'
                            placeholder="Thorsten" />
                    </div>

                    <div className='form-group'>
                        <label>Last Name <label style={{'color':'red'}}>*</label></label>
                        <input 
                            type='username' 
                            name='last_name' 
                            value= {parentComponentValues.last_name}
                            onChange={this.props.handleChange}
                            className='form-control accountCreateInput'
                            placeholder="Altenkirch" />
                    </div>

                    <div className='form-group'>
                        <label>Email Address <label style={{'color':'red'}}>*</label></label>
                        <input 
                            type='username' 
                            name='email' 
                            value= {parentComponentValues.email}
                            onChange={this.props.handleChange}
                            className='form-control accountCreateInput'
                            placeholder="recursive_superPower@nottingham.edu" />
                    </div>

                    <div className='form-group'>
                        <label>Password <label style={{'color':'red'}}>*</label></label>
                        <input 
                            type='password' 
                            name='password'
                            value={parentComponentValues.password}
                            onChange={this.props.handleChange}
                            className='form-control accountCreateInput'
                            placeholder='password'/>
                    </div>

                    <div className='form-group'>
                        <label>Confirm Password <label style={{'color':'red'}}>*</label></label>
                        <input 
                            type='password' 
                            name='password_confirm'
                            value={parentComponentValues.password_confirm}
                            onChange={this.props.handleChange}
                            className='form-control accountCreateInput'
                            placeholder='password'/>
                        <small
                            className='d-flex form-text justify-content-center'>
                            Profile picture is optional
                        </small>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type='Submit' className='btn btn-secondary'>Continue</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        {this.renderMessage()}
                    </div>
                </form>
            </div>
        )
    }
}

export default AccountForm