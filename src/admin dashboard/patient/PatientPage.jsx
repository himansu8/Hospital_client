import React from 'react'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import './patientpage.scss'
import Patient from '../../DashBoard/Patient'
import SidebarDoc from '../../DoctorDashboard/SidebarDoc'
import NavbarDoc from '../../DoctorDashboard/NavbarDoc'
import SidebarRecep from '../../receptionist dashboard/SidebarRecep'
import NavbarRecep from '../../receptionist dashboard/NavbarRecep'
function PatientPage({ columns,type }) {
  return (

<div className='list'>
      {type === "admin" && (
        <>
          <Sidebar type={type} />
          <div className="listContainer">
            <Navbar1 />
            <Patient type="admin" columns={columns} />
          </div>
        </>
      )}

      {type === "doctor" && (
        <>
          <SidebarDoc />
          <div className="listContainer">
            <NavbarDoc />
            <Patient type="doctor" columns={columns} />
          </div>
        </>
      )}
        {type === "recep" && (
        <>
          <SidebarRecep />
          <div className="listContainer">
            <NavbarRecep />
            <Patient type="recep" columns={columns} />
          </div>
        </>
      )}
    </div>
  )
}

export default PatientPage