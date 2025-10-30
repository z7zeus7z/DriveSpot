import React from 'react'
import style from '../../Style/Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faUser,faScrewdriverWrench,faRightFromBracket   } from '@fortawesome/free-solid-svg-icons';
import {Link,useNavigate} from 'react-router-dom'
const Nav = (props) => {
  const {user,setUser}=props;
  const navigate = useNavigate();
  const handleLogout=()=>{
    setUser(null);
    localStorage.removeItem('user');
    navigate('/')
  }
  return (
    <>
       <div className={style.navContainer}>
           <div className={style.logo}>
            <div><Link to='/'><h2>DriveSpot</h2></Link></div>
          
           </div>
           <div className={style.options}>
              {user&&user.role==='admin'&&(<div className={style.option}><Link to='/adminDash'><FontAwesomeIcon size='xs' icon={faScrewdriverWrench}/></Link></div>)}
              <Link to='/'><div className={style.option}><FontAwesomeIcon size='xs' icon={faHouse} /></div></Link>
              
              
              {user?(<div className={style.option} onClick={handleLogout} title='LogOut'><FontAwesomeIcon icon={faRightFromBracket}/></div>):(<Link to='/auth'><div className={`${style.user} ${style.option}`}><FontAwesomeIcon icon={faUser}/></div></Link>  )}
               
           </div>
        </div>
    </>
  )
}

export default Nav