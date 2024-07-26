import React from 'react'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import './doctorpage.scss'
import UpdateDoctor from './UpdateDoctor'

function EditDoctorPage() {
  return (
    <div className='list'>
    <Sidebar />
    <div className="listContainer">
        <Navbar1 />
        <UpdateDoctor />
    </div>
</div>
  )
}

export default EditDoctorPage