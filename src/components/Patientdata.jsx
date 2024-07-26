import React from 'react'
import "./patientData.css"
//import Prescription from './Prescription';
import { useNavigate } from 'react-router-dom';

function Patientdata({ setOpen, patientData, error }) {
  const navigate = useNavigate();
  const handlePrint = () => {
    setOpen(false);
    navigate('/prescription', { state: patientData });
  };



  return (
    <div className='container123'>
      <div className="wrapper123">
        <div className="close12" onClick={() => setOpen(false)}>X</div>
        {error && <p className="error">{error}</p>}
        {patientData && (
          <div>
            <h2>Patient Details</h2>
            <table>
              <tbody>
                <tr>
                  <th>Attribute</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{patientData.patientName}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{patientData.gender}</td>
                </tr>
                <tr>
                  <td>Mobile Number</td>
                  <td>{patientData.mobileNumber}</td>
                </tr>
                <tr>
                  <td>Department</td>
                  <td>{patientData.department}</td>
                </tr>
                <tr>
                  <td>Doctor Name</td>
                  <td>{patientData.doctorName}</td>
                </tr>
                <tr>
                  <td>Appointment Time</td>
                  <td>{patientData.appointmentTime}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{patientData.address}</td>
                </tr>
              </tbody>
            </table>
            <button className='btn2345' onClick={()=>handlePrint(patientData)} >next</button>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Patientdata