import logo from './logo.svg';
import './App.css';
import UserForm from './userForm'
import User from './User'
import axios from 'axios'
import * as yup from 'yup'
import React, {useState, useEffect} from 'react'

const initialFormValues = {
  username: "",
  email: "",
  password: "", 
  accept: false,
}

function App() {


  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const postNewUser = (newUser) => {
    axios
    .post(`https://reqres.in/api/users`, newUser)
    .then(res=>{
      setUsers([res.data, ...users]);
      setFormValues(initialFormValues)
    })
    .catch(err =>{
      console.log(err)
    })
  }

  const inputChange = (name, value) => {
  setFormValues({
    ...formValues,
    [name]: value,
  })

}

  const submitForm = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password, 
      accept: formValues.accept
    }
    postNewUser(newUser)
  }

  return (
    <div className='container'>
      <h1>Make an Account</h1>
      <UserForm
      values={formValues}
      submit={submitForm}
      input={inputChange}
      />
      {users.map(user=>{
        return <User key='user.id' details={user}/>
      })}
    </div>
  )
}

export default App;
