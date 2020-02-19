import React, { Component } from 'react'
import '../CSS/input.css'


class ProfileForm extends Component {


    constructor(props) {
        super(props)
    }

    // Renders a message if any errors have ocurred
    renderMessage() {
        return <p
            className='mt-3'
            style={{ 'color': '#fd4250', 'fontSize': '18px' }}>
            {this.props.errorMessage}
        </p>
    }


    render() {
        const parentComponentValues = this.props.state
        return (
            <div className='row justify-content-center'>
                <form className=' needs-validation' onSubmit={this.props.submit} noValidate>
                    <div className='form-group'>
                        <label>First Name <label style={{ 'color': 'red' }}>*</label></label>
                        <input
                            type='username'
                            name='first_name'
                            value={parentComponentValues.first_name}
                            onChange={this.props.handleChange}
                            className='form-control accountCreateInput'
                            placeholder="Thorsten" />
                    </div>

                    <div className='form-group'>
                        <label>Last Name <label style={{ 'color': 'red' }}>*</label></label>
                        <input
                            type='username'
                            name='last_name'
                            value={parentComponentValues.last_name}
                            onChange={this.props.handleChange}
                            className='form-control accountCreateInput'
                            placeholder="Altenkirch" />
                    </div>

                    <div className='form-group'>
                        <label>User Name <label style={{ 'color': 'red' }}>*</label></label>
                        <input
                            type='username'
                            name='username'
                            value={parentComponentValues.email}
                            onChange={this.props.handleChange}
                            className='form-control accountCreateInput'
                            placeholder="recursive_superPower@nottingham.edu" />
                    </div>

                    <div className='form-group'>
                        <label>Email Address <label style={{ 'color': 'red' }}>*</label></label>
                        <input
                            type='username'
                            name='email_address'
                            value={parentComponentValues.password}
                            onChange={this.props.handleChange}
                            className='form-control accountCreateInput'
                            placeholder='password' />
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type='Submit' className='btn btn-secondary'>Update Profile</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        {this.renderMessage()}
                    </div>
                </form>
            </div>
        )
    }
}

export default ProfileForm