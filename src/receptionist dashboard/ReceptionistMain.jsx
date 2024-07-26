import React from 'react'
import SidebarRecep from '../receptionist dashboard/SidebarRecep'
import NavbarRecep from "../receptionist dashboard/NavbarRecep"
import './doctormain.scss'
import ReceptionistDashboard from '../DashBoard/ReceptionistDashboard'
function ReceptionistMain() {
  return (
    <div className='DoctorPage'>
    <SidebarRecep  className='DoctorPage' />
    <div className="doctorcontainer">
     <NavbarRecep/>
    <ReceptionistDashboard  />
    </div>
  </div>
  )
}

export default ReceptionistMain