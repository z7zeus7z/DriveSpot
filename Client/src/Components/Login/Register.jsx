import React, { useState } from 'react'
import style from '../../Style/Auth.module.css'
const API_URL = import.meta.env.VITE_API_URL;
const Register = (props) => {
    const {setUser, toggleForm}= props;
    const [formData,setFormData]=useState({
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
    });

    const handleChange = (e)=>{
      setFormData(prev=>({
        ...prev,
        [e.target.name]:e.target.value,
      }));
    };
    const handleSubmit = async (e)=>{
      e.preventDefault();
      if(formData.password!==formData.confirmPassword){
        alert("password do not match");
        return;
      }
      try{
        const response = await fetch(`${API_URL}/api/users/register`, {
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
        });
        const data = await response.json();
        if(!response.ok) throw new Error(data.message||'Registration failed');
          setUser(data.user);
        alert("Registered successfully!");
        
      }
      catch(error)
      {
        alert(error.message);
        console.error(error);
      }
    };
  return (
    <>
        <h4>Register</h4>
        <form onSubmit={handleSubmit}>
             <div className={style.authInputs}>
               <div className={style.authInput}>
                <label htmlFor='name' >Name :</label>
                <input id='name' name='name' type="text" value={formData.name} onChange={handleChange} />
            </div>
                <div className={style.authInput}>
                <label htmlFor='email'>Email :</label>
                <input id='email' name='email' type="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className={style.authInput}>
                <label htmlFor='password'>Password :</label>
                <input id='password' name='password' type="password" value={formData.password} onChange={handleChange} />
            </div>
             <div className={style.authInput}>
                <label htmlFor='confirmpassword'>Confirm Password :</label>
                <input id='confirmpassword' name='confirmPassword' type="password" value={formData.confirmPassword} onChange={handleChange} />
            </div>
            </div>
            <div className={style.register}><p onClick={toggleForm}>Login</p></div>
            <button className={style.loginBtn}>Register</button>
        </form>
    </>
  )
}

export default Register