import React, { useState } from 'react'
import style from '../../Style/Auth.module.css'
import Login from './Login'
import Register from './Register'
import Footer from '../Footer/Footer'
const Auth = (props) => {
  const {setUser}= props;
  const [showLogin,setShowLogin] = useState(true);
  return (
    <>
        <div className={style.authContainer}>
            <div className={style.authCard}>
              {showLogin?(<Login setUser={setUser} toggleForm={()=>setShowLogin(false)}/>):(<Register setUser={setUser} toggleForm={()=>setShowLogin(true)}/>)}
            </div>
            <div className={style.authbg}></div>
        </div>
        <Footer/>
    </>
  )
}

export default Auth