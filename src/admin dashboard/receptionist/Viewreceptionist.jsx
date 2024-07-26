import React from 'react'
import './receptionistpage.scss'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import SingleReceptionist from './SingleReceptionist'
import SidebarDoc from '../../DoctorDashboard/SidebarDoc'
import NavbarDoc from '../../DoctorDashboard/NavbarDoc'
function Viewreceptionist({columns, type }) {
  return (
    <div className='list'>
      {type === "admin" && (
        <>
          <Sidebar />
          <div className="listContainer">
            <Navbar1 />
            <SingleReceptionist columns={columns} />
          </div>
        </>
      )}

      {type === "doctor" && (
        <>
          <SidebarDoc />
          <div className="listContainer">
            <NavbarDoc />
            <SingleReceptionist columns={columns} />
          </div>
        </>
      )}
    </div>
  )
}

export default Viewreceptionist