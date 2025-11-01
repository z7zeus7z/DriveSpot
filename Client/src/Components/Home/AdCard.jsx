import React from 'react'
import style from '../../Style/Home.module.css'
import { Link } from 'react-router-dom'
const AdCard = (props) => {
  const {title,info,img}=props
  
  return (
    <>
        <div  style={{ backgroundImage: `url(${img})` }} className={style.carCard}>
                <div className={style.cardTitle}><h3>{title}</h3></div>
                <div className={style.cardinfo}><h5>{info}</h5></div>
               <Link to='/cars'><button className={style.rentButton}>Renatl Car</button></Link> 
        </div>
    </>
  )
}

export default AdCard