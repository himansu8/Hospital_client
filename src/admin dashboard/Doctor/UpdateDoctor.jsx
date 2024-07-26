import React from 'react'
import { useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './updatedoctor.scss'
import { toast } from "react-toastify";
function UpdateDoctor() {
    let navigate = useNavigate();
    const { state } = useLocation();
    //console.log(state)
    const { _id, name, mobile, address, email, department } = state
    const doctorId = _id

    const [data, setData] = useState({
        newDoctorName: name,
        newMobileNumber: mobile,
        newAddress: address,
        newEmail: email,
        newDepartment: department
    })
    //console.log(data)
    function onChangeHandler(e) {
        //console.log(e.target.name, e.target.value)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const inputData = async (e, doctorId) => {
        try {
            e.preventDefault();
            //console.log(token)
            const token = JSON.parse(localStorage.getItem('token')).token;
            await axios.put(`${process.env.REACT_APP_BASE_URL}/api/doctor/${doctorId}`, data,
                {
                    headers:{
                      authorization:`Bearer ${token}`
                  }
                  }
            );
           // console.log(res.data)
            //window.alert("Updated successfully");
            toast.success("Updated successfully")
            navigate("/doctor");
        } catch (error) {
            let errorString = "";
            //handling express validator errors
            if (error?.response?.data?.errors) {
                error.response.data.errors.forEach((ele) => {
                    errorString += `${ele.msg} `
                })
                // showAlert({
                //   type: "error",
                //   msg: errorString
                // })
                //window.alert(errorString)
                toast.error(errorString)

            }
            else {
                //Custom errors
                errorString = error?.response?.data?.error;
                // showAlert({
                //   type: "error",
                //   msg: errorString
                // })
                //window.alert(errorString)
                toast.error(errorString)
            }
        }
    };
    return (
        <div className="doctor-update-form">
            <h1>Doctor Update Form</h1>
            <form>
                <label>
                    <b>Doctor Full Name</b>
                    <br />
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="newDoctorName"
                        onChange={onChangeHandler}
                        value={data.newDoctorName}
                    />
                </label>
                <br />
                <label>
                    <b>Phone Number</b>
                    <br />
                    <input
                        type="text"
                        placeholder="Enter mobile number"
                        name="newMobileNumber"
                        onChange={onChangeHandler}
                        value={data.newMobileNumber}
                    />
                </label>
                <br />
                <label>
                    <b>Email</b>
                    <br />
                    <input
                        type="email"
                        placeholder="Enter email"
                        name="newEmail"
                        onChange={onChangeHandler}
                        value={data.newEmail}
                    />
                </label>
                <br />
                <label>
                    <b>Address</b>
                    <br />
                    <input
                        type="text"
                        placeholder="Enter Your Address"
                        name="newAddress"
                        onChange={onChangeHandler}
                        value={data.newAddress}
                    />
                </label>
                <br />
                <label>
                    <b>Department</b>
                    <br />
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
                <br />
                <button type="submit" onClick={(e) => inputData(e, doctorId)}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default UpdateDoctor