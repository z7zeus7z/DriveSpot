import React from 'react'
import style from '../../Style/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
const PickDrop = () => {
  return (
    <>
        <div className={style.pickDropContainer}>
            <div className={style.pickDropInfo}>
                <div className={style.pickDropTitle}><FontAwesomeIcon className={style.icon} icon={faMapPin}/><h4>Pick-Up</h4></div>
                <div className={style.pickers}>
                    <div className={style.pick}>
                        <label htmlFor="">Location</label>
                        <select name="" id="">
                            <option value="Amman">Amman</option>
                            <option value="Zarqa">Zarqa</option>
                            <option value="Irbid">Irbid</option>
                            <option value="Aqaba">Aqaba</option>
                        </select>
                    </div>
                    <div className={style.pick}>
                        <label htmlFor="">Date</label>
                        <input type="date"/>
                    </div>
                    <div className={style.pick}>
                        <label htmlFor="">Time</label>
                        <input type="time" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PickDrop