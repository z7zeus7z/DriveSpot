import React from 'react'
import style from '../../Style/Footer.module.css'
const Footer = () => {
  return (
    <>
        <div className={style.footerContainer}>
            <div className={style.title}>
                <h4>DriveSpot</h4>
                <p>Our vision is to provide the best rent experince</p>
            </div>
            <div className={style.social}>
                <div className={style.socialTitle}><h6>Socials</h6></div>
                <ul>
                    
                    <li>Instgram</li>
                    <li>Twitter</li>
                    <li>facebook</li>
                </ul>
            </div>
            
        </div>
        <div className={style.copyRight}><p>@2025DriveSpot.All rights reserved</p></div>
    </>
  )
}

export default Footer