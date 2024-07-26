import React from 'react'
import SingleDoctor from './SingleDoctor'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'

function ViewDoctor() {
  return (
    <div className='list'>
    <Sidebar />
    <div className="listContainer">
        <Navbar1 />
        <SingleDoctor/>
    </div>
</div>
  )
}

export default ViewDoctor