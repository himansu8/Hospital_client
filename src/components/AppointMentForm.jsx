
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from "react-toastify";

function AppointMentForm() {
  let navigate = useNavigate();

  let [patientData, setPatientData] = useState({

    patientName: "",
    gender: "",
    mobileNumber: "",
    address: "",
    email: "",
    aadhar: "",
    department: "",
    doctorName: "",
    appointmentTime: ""
  })
  const { patientName, gender, mobileNumber, address, email, aadhar, department, doctorName, appointmentTime } = patientData
  const departmentsArray = [
    "Select Department",
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/doctor/data/doctors`,
        { withCredentials: true }
      );
      setDoctors(data);
     // console.log(data);
    };
    fetchDoctors();
  }, []);
  function onChangeHandler(e) {
    setPatientData({
      ...patientData,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e) {
    try {
      e.preventDefault();
      //console.log(patientData);
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/patient`, patientData)
     // console.log(res.data)
      const confirmed = window.confirm("Are you submited your form?");
      if (!confirmed) return;
      window.alert("Thank You For chossing us. Your Appointment details are send to your mail")
      setPatientData({
        patientName: "",
        gender: "",
        mobileNumber: "",
        address: "",
        email: "",
        aadhar: "",
        department: "",
        doctorName: "",
        appointmentTime: ""
      })
      navigate('/')

    } catch (error) {
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
    }
  }
  function onClear(e) {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (!confirmed) return;
    setPatientData({
      patientName: "",
      gender: "",
      mobileNumber: "",
      address: "",
      email: "",
      aadhar: "",
      department: "",
      doctorName: "",
      appointmentTime: ""
    });
  }
  return (
    <>
      <div className="container form-component register-form">
        <h2>Doctor Appointment form</h2>
        <p>Please fill up the form</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form>
          <div>
            <input type="text" placeholder="Full Name" name="patientName" onChange={onChangeHandler} value={patientName} />
            <select value={gender} name="gender" onChange={onChangeHandler}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>

            <input type="text" placeholder="Enter mobile number" name="mobileNumber" onChange={onChangeHandler} value={mobileNumber} />
            <input type="email" placeholder="Enter email" name="email" onChange={onChangeHandler} value={email} />
          </div>

          <div>
            <input type="text" placeholder="Enter Your Address" name="address" onChange={onChangeHandler} value={address} />
            <input type="number" placeholder="Enter AADHAR number" name="aadhar" onChange={onChangeHandler} value={aadhar} />
          </div>

          <div>
            {/* <select value={department} name="department" onChange={onChangeHandler}>
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="ENT">ENT</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Oncology">Oncology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Physical Therapy">Physical Therapy</option>
              <option value="Radiology">Radiology</option>
            </select> */}
            <select value={department} name="department" onChange={onChangeHandler}>
              {departmentsArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                )
              })}
            </select>
            <select value={doctorName} name="doctorName" onChange={onChangeHandler} disabled={!department}>
              <option value="">Select Doctor</option>
              {doctors.filter((doctor) => doctor.department === department).length > 0 ? (
                doctors.filter((doctor) => doctor.department === department).map((doctor, index) => (
                  <option value={`${doctor.name}`} key={index}>{doctor.name}</option>
                ))
              ) : (
                <option value="" disabled>No doctors available</option>
              )}
            </select>

            {/* <input type="text" placeholder="Enter Doctor's name" name="doctorName" onChange={onChangeHandler} value={doctorName} /> */}
          </div>

          <div>
            <input type="datetime-local" placeholder="Enterappointment date" name="appointmentTime" onChange={onChangeHandler} value={appointmentTime} />
          </div>


          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to={"/"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Home
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" onClick={onSubmit} style={{ cursor: "pointer" }}>Register</button>
            <button type="button" onClick={onClear} style={{ cursor: "pointer" }}>Reset</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AppointMentForm