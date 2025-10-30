import React, { useState } from 'react'
import style from '../../Style/AdminDash.module.css'
import DashNav from './DashNav'
import DashBoard from './DashBoard'
import ListCar from './ListCar'
import ManageCars from './ManageCars'
const AdminDash = (props) => {
  const {setCars} = props ;
  const [activeTab,setActiveTab] = useState('DashBoard')
  return (
    <>
      <div className={style.adminDashContainer}>
        <div className={style.tabs}>
          <div onClick={()=>setActiveTab("DashBoard")} className={style.tab}>DashBoard</div>
          <div onClick={()=>setActiveTab("ListCar")} className={style.tab}>List Car</div>
          <div onClick={()=>setActiveTab("ManageCars")} className={style.tab}>Manage Cars</div>
        </div>
        <DashNav setActiveTab={setActiveTab}/>
        <div className={style.contentContainer}>
          {activeTab==="DashBoard"&&<DashBoard/>}
          {activeTab==="ListCar"&&<ListCar setCars={setCars}/>}
          {activeTab==="ManageCars"&&<ManageCars setCars={setCars} />}
        </div>
        
      </div>
    </>
  )
}

export default AdminDash