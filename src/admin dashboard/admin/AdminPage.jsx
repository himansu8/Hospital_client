import React from 'react'
import Sidebar from '../../DashBoard/Sidebar'
import AdminDashBoard from '../../DashBoard/AdminDashBoard'
import './adminpage.scss'
import Navbar1 from '../../DashBoard/Navbar1'
import NavbarRecep from '../../receptionist dashboard/NavbarRecep'
import SidebarRecep from '../../receptionist dashboard/SidebarRecep'
import NavbarDoc from '../../DoctorDashboard/NavbarDoc'
import SidebarDoc from '../../DoctorDashboard/SidebarDoc'

// shabbir sir 

function AdminPage({type}) {
  return (
<div className='AdminPage'>
      {type === "admin" && (
        <>
          <Sidebar type={type} />  
          <div className="admincontainer">
            <Navbar1 />
            <AdminDashBoard />
          </div>
        </>
      )}

      {type === "doctor" && (
        <>
          <SidebarDoc />
          <div className="admincontainer">
            <NavbarDoc />
            <AdminDashBoard />
          </div>
        </>
      )}
      {type === "recep" && (
        <>
          <SidebarRecep />
          <div className="admincontainer">
            <NavbarRecep />
            <AdminDashBoard />
          </div>
        </>
      )}
    </div>
  )
}

export default AdminPage