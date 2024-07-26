import React from 'react';
import './prescription.css';
import { useLocation } from 'react-router-dom';

function Prescription() {
    const location = useLocation();
    const patientData = location.state;
//console.log(patientData)
    const handlePrint = () => {
        window.print();
    };


   // Function to get current date and time
   const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
};


    return (
        <div style={{ width: '100%', padding: '20px', height: '100vh', border: '1px solid #ccc', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }} className="header">
                <div style={{ fontSize: '18px' }} className="hospital-details">
                    <img src="/logo1.png" alt="logo" style={{ width: '100px', height: '100px', marginLeft:'20px'}} className="logo-img" />
                    <p>Apna Hospital</p>
                </div>
                <div style={{ width: '45%', marginTop: '30px' }} className="doctor-details">
                    <h3 style={{ marginBottom: '10px' }} className="details-title">dr. {patientData.doctorName}</h3>
                    <div style={{ fontSize: '16px' }} className="details">
                        <div className="detail"><strong>Specialty:</strong> {patientData.department}</div>
                        <div className="detail"><strong>Department:</strong> {patientData.department}</div>
                        <div className="detail"><strong>Contact:</strong> 9583192612</div>
                        <br/>
                        <div className="detail"><strong>Date & Time:</strong> {getCurrentDateTime()}</div>
                    </div>
                </div>
            </div>
            <hr style={{ marginTop: '20px', marginBottom: '20px', border: 'none', borderTop: '1px solid #ccc' }} className="divider" />
            <div style={{ width: '100%', marginTop: '20px' }} className="patient-details">
                <div style={{ fontSize: '16px' }} className="details">
                    <div className="detail"><strong> Patient Name:</strong> {patientData.patientName} <strong>Age:</strong>________ <strong>Gender:</strong> {patientData.gender} <strong>Mobile Number:</strong> {patientData.mobileNumber}</div>
                <br/>
                </div>
            </div>
            <hr style={{ marginTop: '20px', marginBottom: '20px', border: 'none', borderTop: '1px solid #ccc' }} className="divider" />
            <h1>Rx.</h1>
            <div style={{ width: '100%', marginTop: '20px' }} className="remarks">
                <h3 style={{ marginBottom: '10px' }} className="details-title">Doctor's Remarks</h3>
                <label style={{ marginBottom: '5px' }} className="remark-label" htmlFor="remarks">Add your remarks:</label>
                <textarea id="remarks" style={{ width: '100%', height: '100px', padding: '5px', fontSize: '16px' }} className="remark-input"></textarea>
            </div>
            <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} className="button123" onClick={handlePrint}>Print Prescription</button>
        </div>
      );
}

export default Prescription;
