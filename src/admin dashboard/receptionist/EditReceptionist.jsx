import React from 'react'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import './receptionistpage.scss'
import UpdateReceptionist from './UpdateReceptionist'
import SidebarDoc from '../../DoctorDashboard/SidebarDoc'
import NavbarDoc from '../../DoctorDashboard/NavbarDoc'
function EditReceptionist({columns,type}) {
  return (
    <div className='list'>
    {type === "admin" && (
      <>
        <Sidebar  />
        <div className="listContainer">
          <Navbar1 />
          <UpdateReceptionist type="admin" columns={columns} />
        </div>
      </>
    )}

    {type === "doctor" && (
      <>
        <SidebarDoc />
        <div className="listContainer">
          <NavbarDoc />
          <UpdateReceptionist type="doctor" columns={columns} />
        </div>
      </>
    )}
  </div>

  )
}

export default EditReceptionist


