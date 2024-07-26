import React, { useEffect, useState } from 'react';
import './admindashboard.scss';
import axios from 'axios';
import moment from 'moment';
import Patientdata from '../components/Patientdata';
import { toast } from "react-toastify";
function AdminDashBoard() {
  const [doctorData, setDoctorData] = useState([]);
  const [receptionist, setReceptionist] = useState([]);
  const [patient, setPatient] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  const [mobileNumber, setMobileNumber] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [open, setOpen] = useState(false);
 // const [show, setShow] = useState(false);

  // const toggleMenu = () => {
  //   setShow(!show);
  // };

  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/patient/data/search?mobileNumber=${mobileNumber}`);

      if (response.status === 200) {
        setOpen(true)
        setPatientData(response.data);
        setError('');
      } else {
        setError('Patient not found');
        setPatientData(null);
        setOpen(false)

      }
    } catch (error) {
      console.error(error);
      let errorString = "";
      //handling express validator errors
      if (error.response.data.errors) {
        error.response.data.errors.forEach((ele) => {
          errorString += `${ele.msg} `
        })
        // showAlert({
        //   type: "error",
        //   msg: errorString
        // })
        //window.alert(errorString)
        toast.error(errorString);

      }
      else {
        //Custom errors
        errorString = error.response.data.error;
        // showAlert({
        //   type: "error",
        //   msg: errorString
        // })
        //window.alert(errorString)
        toast.error(errorString);
      }
      // setError('Something went wrong');
      // setPatientData(null);
    }
  };
  async function fetchDoctor() {
    try {
      const token = JSON.parse(localStorage.getItem('token')).token;
      let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/doctor`,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      setDoctorData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchReceptionist() {
    try {
      const token = JSON.parse(localStorage.getItem('token')).token;
      let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/receptionist`,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      setReceptionist(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPatient() {
    try {
      const token = JSON.parse(localStorage.getItem('token')).token;
      let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/patient`,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      setPatient(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDoctor();
    fetchReceptionist();
    fetchPatient();
    updateCurrentTime(); // Initial call to set current time
    const intervalId = setInterval(updateCurrentTime, 1000); // Update current time every second
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const updateCurrentTime = () => {
    setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
  };

  return (
    <>

      <div className='admindashboard'>
        <div className='searchPatient'>
          <input type='text' placeholder='Patient mobile number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}></input>
          <button className='searchBtn' onClick={() => { handleSearch() }}>Search</button>
        </div>
        <div className="header">
          <h1 className='sm-f-24' style={{ marginTop: "10PX" }}>Welcome to Apna Hospital</h1>
        </div>
        <div className="logo">
          <img src="/logo1.png" alt="logo" className="logo-img" />
        </div>
        <div className="content">
          <div className="stats">
            <div className="stat">
              <h2>Total Doctors</h2>
              <p>{doctorData.length}</p>
            </div>
            <div className="stat">
              <h2>Total Receptionist</h2>
              <p>{receptionist.length}</p>
            </div>
            <div className="stat">
              <h2>Total Patient</h2>
              <p>{patient.length}</p>
            </div>
          </div>
          {/* <div className="summary">
            <h2>Summary</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero a velit fermentum efficitur.</p>
          </div> */}
          <div className="current-time">
            <h2>Date and Time</h2>
            <p>{currentTime}</p>
          </div>
        </div>
      </div>
      {open && <Patientdata setOpen={setOpen} patientData={patientData} error={error} />}
    </>
  );
}

export default AdminDashBoard;
