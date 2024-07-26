import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";
import MessageIcon from '@mui/icons-material/Message';
import { FaUserInjured } from 'react-icons/fa';
import { MdAccessibility } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
//import axios from 'axios'


function Sidebar() {
  const { user, dispatch } = useContext(AuthContext)
  let navigate = useNavigate()
  const handleLogout = async () => {
    try {
      let token = JSON.parse(localStorage.getItem("token")).token;
         //   console.log(token, user)
        if ( user && token){
          localStorage.clear()
          dispatch({ type: "LOGOUT" })
        navigate('/');
        }
      }
    
    catch (error) {
      console.log(error)
    }
  };
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to={'/admin/dashboard'} style={{ textDecoration: "none" }}>
          <span className="logo w-[2px]">admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={'/admin/dashboard'} style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          </Link>
          
          <p className="title">Profile</p>
          <Link to={'/doctor'} style={{ textDecoration: "none" }}>
            <li>
              <FaUserDoctor className='icon' />
              <span className='hide-on-small-devices'>Doctor</span>
            </li>
          </Link>
          <Link to={'/receptionist'} style={{ textDecoration: "none" }}>
            <li>
              <MdAccessibility className='icon' />
              <span className='hide-on-small-devices'>Receptionist</span>
            </li>
          </Link>
          <Link to={'/patient'} style={{ textDecoration: "none" }}>
            <li>
              <FaUserInjured className='icon' />
              <span className='hide-on-small-devices'>Patient</span>
            </li>
          </Link>
          <p className="title">Message</p>
          <Link to={'/messages'} style={{ textDecoration: "none" }}>
          <li>
            <MessageIcon className='icon' />
            <span className='hide-on-small-devices'>Message</span>
          </li>
          </Link>
          <li>
            <NotificationsOutlinedIcon className='icon' />
            <span className='hide-on-small-devices'>Notifications</span>
          </li>

          <p className="title">USER</p>

          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span className='hide-on-small-devices'> {user.name} </span>
          </li>
          <li>
            <ExitToAppIcon className='icon' />
            <span className='hide-on-small-devices' onClick={handleLogout}>Log Out</span>
          </li>
        </ul>
      </div>
     
    </div>
  )
}

export default Sidebar