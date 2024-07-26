import React from 'react'
import './receptionistpage.scss'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import Receptionist from '../../DashBoard/Receptionist'
import SidebarDoc from '../../DoctorDashboard/SidebarDoc'
import NavbarDoc from '../../DoctorDashboard/NavbarDoc'


function ReceptionistPage({ columns,type }) {
 // console.log(type)
  return (
<div className='list'>
      {type === "admin" && (
        <>
          <Sidebar  />
          <div className="listContainer">
            <Navbar1 />
            <Receptionist type="admin" columns={columns} />
          </div>
        </>
      )}

      {type === "doctor" && (
        <>
          <SidebarDoc />
          <div className="listContainer">
            <NavbarDoc />
            <Receptionist type="doctor" columns={columns} />
          </div>
        </>
      )}
    </div>
  )
}

export default ReceptionistPage