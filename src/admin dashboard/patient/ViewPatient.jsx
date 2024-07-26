import React from 'react'
import './patientpage.scss'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import SinglePatient from './SinglePatient'
import SidebarDoc from '../../DoctorDashboard/SidebarDoc'
import NavbarDoc from '../../DoctorDashboard/NavbarDoc'
import SidebarRecep from '../../receptionist dashboard/SidebarRecep'
import NavbarRecep from '../../receptionist dashboard/NavbarRecep'
function ViewPatient({ columns, type }) {
  return (
    <div className='list'>
      {type === "admin" && (
        <>
          <Sidebar type={type} />
          <div className="listContainer">
            <Navbar1 />
            <SinglePatient  columns={columns} />
          </div>
        </>
      )}

      {type === "doctor" && (
        <>
          <SidebarDoc />
          <div className="listContainer">
            <NavbarDoc />
            <SinglePatient  columns={columns} />
          </div>
        </>
      )}
       {type === "recep" && (
        <>
          <SidebarRecep />
          <div className="listContainer">
            <NavbarRecep />
            <SinglePatient  columns={columns} />
          </div>
        </>
      )}
    </div>
  )
}

export default ViewPatient