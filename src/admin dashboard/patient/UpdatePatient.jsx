import { useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './updatepatient.scss'
import { toast } from "react-toastify";
function UpdatePatient({ type }) {
  let navigate = useNavigate();
  const { state } = useLocation();

  const { _id, patientName, mobileNumber, email, address, aadhar, department, doctorName, appointmentTime } = state || {};
  const referenceNo = _id;

  const [data, setData] = useState({
    newPatientName: patientName,
    newMobileNumber: mobileNumber,
    newAddress: address,
    newEmail: email,
    newAadhar: aadhar,
    newDepartment: department,
    newDoctorName: doctorName,
    newAppointmentTime: appointmentTime,
  });
 // console.log(appointmentTime);
  function onChangeHandler(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const inputData = async (e, referenceNo) => {
    try {
      e.preventDefault();
      const token = JSON.parse(localStorage.getItem('token')).token;
      await axios.put(`${process.env.REACT_APP_BASE_URL}/api/patient/${referenceNo}`, data,
        {
          headers:{
              authorization:`Bearer ${token}`
          }
      }
      );
     // console.log(res.data);
      //window.alert("Updated successfully");
      toast.success("Updated successfully")
      if (type === "admin") { navigate("/patient") }
      if (type === "doctor") { navigate("/doc/patient") }
      if (type === "recep") { navigate("/recep/patient") }

    } catch (error) {
      let errorString = "";
      if (error?.response?.data?.errors) {
        error.response.data.errors.forEach((ele) => {
          errorString += `${ele.msg} `;
        });
        //window.alert(errorString);
        toast.error(errorString)

      } else {
        errorString = error?.response?.data?.error;
        // window.alert(errorString);
        toast.error(errorString)

      }
    }
  };

  return (
    <div className="update-patient-form">
      <h1>Patient Update Form</h1>
      <form>
        <label>
          <b>Patient Full Name</b><br />
          <input type="text" placeholder="Enter Name" name="newPatientName" onChange={onChangeHandler} value={data.newPatientName} />
        </label>
        <br />
        <label>
          <b>Phone Number</b><br />
          <input type="text" placeholder="Enter mobile number" name="newMobileNumber" onChange={onChangeHandler} value={data.newMobileNumber} />
        </label>
        <br />
        <label>
          <b>Email</b><br />
          <input type="email" placeholder="Enter email" name="newEmail" onChange={onChangeHandler} value={data.newEmail} />
        </label>
        <br />
        <label>
          <b>Address</b><br />
          <input type="text" placeholder="Enter Your Address" name="newAddress" onChange={onChangeHandler} value={data.newAddress} />
        </label>
        <br />
        <label>
          <b>Aadhar</b><br />
          <input type="text" placeholder="Enter Aadhar number" name="newAadhar" onChange={onChangeHandler} value={data.newAadhar} />
        </label>
        <br />
        <label>
          <b>Department</b><br />
          <select value={data.newDepartment} name="newDepartment" onChange={onChangeHandler}>
            {/* <option value="">Select Department</option> */}
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="ENT">ENT</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Oncology">Oncology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Physical Therapy">Physical Therapy</option>
            <option value="Radiology">Radiology</option>
          </select>
        </label>
        <br />
        <label>
          <b>Doctor Name</b><br />
          <input type="text" placeholder="Enter doctor's name" name="newDoctorName" onChange={onChangeHandler} value={data.newDoctorName} />
        </label>
        <br />
        <label>
          <b>Appointment Date and Time</b><br />
          <input type="datetime-local" name="newAppointmentTime" onChange={onChangeHandler} value={data.newAppointmentTime} />
        </label>
        <br />
        <button type="submit" onClick={(e) => inputData(e, referenceNo)}>Update</button>
      </form>
    </div>
  );
}

export default UpdatePatient