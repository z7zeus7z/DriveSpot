import React from 'react'
import style from '../../Style/Home.module.css'
const AdCard = (props) => {
  const {title,info,img}=props
  
  return (
    <>
        <div  style={{ backgroundImage: `url(${img})` }} className={style.carCard}>
                <div className={style.cardTitle}><h3>{title}</h3></div>
                <div className={style.cardinfo}><h5>{info}</h5></div>
                <button className={style.rentButton}>Renatl Car</button>
        </div>
    </>
  )
}

export default AdCard