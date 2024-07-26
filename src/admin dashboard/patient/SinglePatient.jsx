import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useLocation } from "react-router-dom"

function SinglePatient() {
    const { state } = useLocation();
    const [patient, setPatient] = useState({})
    const referenceNo = state.referenceNo
    //console.log(referenceNo)
    const fetchPatient = async (referenceNo) => {

        try {
          const token = JSON.parse(localStorage.getItem('token')).token;
            let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/patient/${referenceNo}`,
              {
                headers:{
                    authorization:`Bearer ${token}`
                }
            }
            );
            setPatient(res.data);
            //console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchPatient(referenceNo);
    }, [referenceNo]);
   //let newappointmentTime = String(patient.appointmentTime).slice(0, 16)
   
    return (
        <div className="single-doctor-container">
    <table className="single-doctor-table">
      <tbody>
        <tr>
          <th> Id:</th>
          <td>{patient._id}</td>
        </tr>
        <tr>
          <th>Name:</th>
          <td>{patient.patientName}</td>
        </tr>
        <tr>
          <th>Gender:</th>
          <td>{patient.gender}</td>
        </tr>
        <tr>
          <th>Email:</th>
          <td>{patient.email}</td>
        </tr>
        <tr>
          <th>Mobile Number:</th>
          <td>{patient.mobileNumber}</td>
        </tr>
        <tr>
          <th>Address:</th>
          <td>{patient.address}</td>
        </tr>
        <tr>
          <th>Aadhar Number:</th>
          <td>{patient.aadhar}</td>
        </tr>
        <tr>
          <th>Department</th>
          <td>{patient.department}</td>
        </tr>
        <tr>
          <th>Doctor's Name</th>
          <td>{patient.doctorName}</td>
        </tr>        
        <tr>
          <th>Appointment Date & Time</th>
          <td>{patient.appointmentTime}</td>
        </tr>
      </tbody>
    </table>
  </div>
    )
}

export default SinglePatient