import React from 'react'

export default function Form(props){
    
    const{ values, submit, input } = props

    const onSubmit = (evt) =>{
        evt.preventDefault();
        submit()
    }

    const onChange = (evt) =>{
        const { name, value, type, checked } = evt.target;
        const valueToUSe = type === "checkbox" ? checked : value;
        input(name, valueToUSe);
    }
    
    return(
        <form onSubmit={onSubmit}>
            <div className='form-inputs'>
                <h3>please give us some info:</h3>
                <label>
                    Username
                    <input
                    type='text'
                    name='username'
                    value={values.username}/>
                </label>
                <label>
                    Email:
                    <input 
                    type='text'
                    name='email'
                    value={values.email}/>
                </label>
                <label>
                    Password:
                    <input 
                    type='text'
                    name='pasword'
                    value={values.password}/>
                </label>
                <label>
                    I agree to the Terms and Conditions
                    <input
                    type='checkbox'
                    name='accept'
                    checked={values.accept}
                    onChange={onChange}/>
                </label>
            </div>
        </form>
        
    )
}