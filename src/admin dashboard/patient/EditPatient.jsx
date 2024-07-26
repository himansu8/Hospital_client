import React from 'react'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import './patientpage.scss'
import UpdatePatient from './UpdatePatient'
import SidebarDoc from '../../DoctorDashboard/SidebarDoc'
import NavbarDoc from '../../DoctorDashboard/NavbarDoc'
import SidebarRecep from '../../receptionist dashboard/SidebarRecep'
import NavbarRecep from '../../receptionist dashboard/NavbarRecep'
function EditPatient({columns,type}) {
  return (
<div className='list'>
      {type === "admin" && (
        <>
          <Sidebar type={type} />
          <div className="listContainer">
            <Navbar1 />
            <UpdatePatient type="admin" columns={columns} />
          </div>
        </>
      )}

      {type === "doctor" && (
        <>
          <SidebarDoc />
          <div className="listContainer">
            <NavbarDoc />
            <UpdatePatient type="doctor" columns={columns} />
          </div>
        </>
      )}
       {type === "recep" && (
        <>
          <SidebarRecep/>
          <div className="listContainer">
            <NavbarRecep />
            <UpdatePatient type="recep" columns={columns} />
          </div>
        </>
      )}
    </div>
  )
}

export default EditPatient