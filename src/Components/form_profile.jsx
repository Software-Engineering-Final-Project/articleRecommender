import React from 'react'

function ProfileForm(props) {
    return(
        <form className=' needs-validation' onSubmit={() => console.log("TOTO")} noValidate>
            <FormRow
                title='Username'
                name='username'
                value='bigPapaSchaps'
                placeholder='username'
                handleChange = {() => console.log("Hehehehhe")}
                editable = { props.editable }
            />
            <FormRow
                title='First name'
                name='first_name'
                value='Joshua'
                placeholder='username'
                handleChange = {() => console.log("Hehehehhe")}
                editable = { props.editable }
            />
            <FormRow
                title='Last Name'
                name='last_name'
                value='Schappel'
                placeholder='username'
                handleChange = {() => console.log("Hehehehhe")}
                editable = { props.editable }
            />
            <FormRow
                title='Email Address'
                name='email'
                value='schappel@shu.edu'
                placeholder='username'
                handleChange = {() => console.log("Hehehehhe")}
                editable = { props.editable }
            />
        </form>
    )
}


/** A single row in the form. Has the following props:
 * @param {string} title: The title for the row
 * @param {string} name: The name of the parent state
 * @param {string} value: What is to be displayed in the input field
 * @param {function} handleChange: A function that is called when the input field is edited
 * @param {boolean} editable(optional): A boolean representing the editable state of the row: default is false 
 */
function FormRow(props) {
    return(
        <div className='form-group'>
            <label>{ props.title }</label>
            <input
                type='username'
                name={ props.name }
                value={ props.value }
                onChange={ props.handleChange }
                className='form-control accountCreateInput'
                placeholder={ props.placeholder } 
                readOnly={ !props.editable }
                />
        </div>
    )
}


export default ProfileForm