import React from 'react'
import './messagepage.scss'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import Messages from '../../DashBoard/Messages'
import SidebarDoc from '../../DoctorDashboard/SidebarDoc'
import NavbarDoc from '../../DoctorDashboard/NavbarDoc'
import SidebarRecep from '../../receptionist dashboard/SidebarRecep'
import NavbarRecep from '../../receptionist dashboard/NavbarRecep'
function MessagePage({ type }) {
  return (
    <div className='AdminPage'>
      {type === "admin" && (
        <>
          <Sidebar type={type} />
          <div className="admincontainer">
            <Navbar1 />
            <Messages />
          </div>
        </>
      )}

      {type === "doctor" && (
        <>
          <SidebarDoc />
          <div className="admincontainer">
            <NavbarDoc />
            <Messages />
          </div>
        </>
      )}
      {type === "recep" && (
        <>
          <SidebarRecep />
          <div className="admincontainer">
            <NavbarRecep />
            <Messages />
          </div>
        </>
      )}
    </div>
  )
}

export default MessagePage
