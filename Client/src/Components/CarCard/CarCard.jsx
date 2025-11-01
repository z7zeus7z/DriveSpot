import React from 'react'
import style from '../../Style/CarCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGasPump,faGears,faPerson  } from '@fortawesome/free-solid-svg-icons'; 
import {Link} from 'react-router-dom'
const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL from env =>", API_URL);

const CarCard = (props) => {
    const {car} = props;

  return (
    <>
        <div className={style.carCard}>
            <div className={style.carName}>
                <div className={style.title}>
                    <h4>{car.make}</h4>
                    <p>{car.model}</p>
                </div>
                
            </div>
            <div className={style.carImg}>
                <img src={`${API_URL}/public/cars/${car.images[0]}`} alt={car.model} />

            </div>
            <div className={style.carInfo}>
                <div className={style.info}><FontAwesomeIcon icon={faGasPump}/><p>{car.type}</p></div>
                <div className={style.info}><FontAwesomeIcon icon={faGears}/><p>{car.transmition || "Automatic"}</p></div>
                <div className={style.info}><FontAwesomeIcon icon={faPerson}/><p>{car.seats}</p></div>
            </div>
            <div className={style.price_btn}>
                <p>{car.price}/day</p>
                <button className={style.btn}><Link to={`/cardetail/${car._id}`}>View Details</Link></button>
            </div>
        </div>
    </>
  )
}

export default CarCard