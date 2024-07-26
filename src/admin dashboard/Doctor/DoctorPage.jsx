import React from 'react'
import './doctorpage.scss'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import Doctor from '../../DashBoard/Doctor'


function DoctorPage({ columns,type }) {
    return (
        <div className='list'>
            <Sidebar type={type} />
            <div className="listContainer">
                <Navbar1 />
                <Doctor columns={columns} />
            </div>
        </div>
    )
}

export default DoctorPage