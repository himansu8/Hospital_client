import React from 'react'
import SidebarDoc from '../SidebarDoc'
import NavbarDoc from "../NavbarDoc"
import './doctormain.scss'
import DoctorDashBoard from '../../DashBoard/DoctorDashBoard'
function DoctorMain() {
  return (
    <div className='DoctorPage'>
    <SidebarDoc  className='DoctorPage' />
    <div className="doctorcontainer">
     <NavbarDoc/>
    <DoctorDashBoard  />
    </div>
  </div>
  )
}

export default DoctorMain