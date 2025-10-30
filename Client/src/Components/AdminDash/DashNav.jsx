import React from 'react'
import style from '../../Style/AdminDash.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faListUl,faCar } from "@fortawesome/free-solid-svg-icons";
const DashNav = (props) => {
    const {setActiveTab} = props;
    return (
    <>
        <div className={style.dashNavContainer}>
            <div className={style.navTitle}><h4>MainMenu</h4></div>
            <div className={style.navTabs}>
                <div className={style.navTab}>
                    <FontAwesomeIcon className={style.icon} icon={faHouse}/>
                    <p onClick={()=>setActiveTab("DashBoard")}>DashBoard</p>
                </div>
                <div className={style.navTab}>
                    <FontAwesomeIcon className={style.icon} icon={faListUl}/>
                    <p onClick={()=>setActiveTab("ListCar")}>List Car</p>
                </div>
                <div className={style.navTab}>
                    <FontAwesomeIcon className={style.icon} icon={faCar}/>
                    <p onClick={()=>setActiveTab("ManageCars")}>Manage Cars</p>
                </div>
              
            </div>
        </div>
    </>
  )
}

export default DashNav