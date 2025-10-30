import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../../Style/Auth.module.css'
const API_URL = import.meta.env.VITE_API_URL;
const Login = (props) => {
    const {setUser,toggleForm}= props;
    const[formData,setFormData]= useState({
      email:'',
      password:'',
    });
    const navigate=useNavigate();
    const handleChange = (e)=>{
      setFormData(prev=>({
        ...prev,
        [e.target.name]:e.target.value,
      }));
    };
    const handleSubmit= async (e)=>{
      e.preventDefault();
      try{
       const response = await fetch(`${API_URL}/api/users/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: formData.email,
    password: formData.password,
  }),
});
        const data = await response.json();
        if(!response.ok) throw new Error(data.message||'Login failed');
        setUser(data.user);
        navigate('/')
      }
      catch(error)
      {
        alert(error.message);
        console.error(error);
      }
    }
  return (
    <>
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
            <div className={style.authInputs}>
            <div className={style.authInput}>
            <label htmlFor="email">Email :</label>
            <input id='email' name='email' type="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className={style.authInput}>
            <label htmlFor="password">Password :</label>
            <input id='password' name='password' type="password" value={formData.password} onChange={handleChange}/>
        </div>
        </div>
        <div className={style.register}><p onClick={toggleForm}>Register</p></div>
        <button className={style.loginBtn}>Login</button>
        </form>
    </>
  )
}

export default Login