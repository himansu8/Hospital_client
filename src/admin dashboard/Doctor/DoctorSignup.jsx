import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from "react-toastify";
import { AuthContext } from '../../context/AuthContext';

function DoctorSignup() {
     let navigate = useNavigate();
    const { user } = useContext(AuthContext)
    let [doctorData, setDoctorData] = useState({

        name: "",
        userName: "",
        password: "",
        gender: "",
        email: "",
        mobile: "",
        address: "",
        department: "",
        addedByDean: user.name
    })
    const { name, userName, password, gender, email, mobile, address, department,addedByDean } = doctorData

    function onChangeHandler(e) {
        setDoctorData({
            ...doctorData,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e) {
        try {
            e.preventDefault();
            //console.log(doctorData);
            const token = JSON.parse(localStorage.getItem('token')).token;
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/doctor/signup`, doctorData,
                {
                    headers:{
                        authorization:`Bearer ${token}`
                    }
                }
            )
           // console.log(res.data)
            const confirmed = window.confirm("Are you submited doctor signup form?");
            if (!confirmed) return;
            window.alert("Thank You")
            setDoctorData({
                name: "",
                userName: "",
                password: "",
                gender: "",
                email: "",
                mobile: "",
                address: "",
                department: "",
                addedByDean: ""
            })
            navigate("/doctor")

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
        setDoctorData({
            name: "",
            userName: "",
            password: "",
            gender: "",
            email: "",
            mobile: "",
            address: "",
            department: "",
            addedByDean: user.name
        });
    }
    return (
        <>
            <div className="container form-component register-form">
                <h2>Doctor Signup</h2>
                <p>Please fill up the form</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
                    voluptas expedita itaque ex, totam ad quod error?
                </p>
                <form>
                    <div>
                        <input type="text" placeholder="Full Name" name="name" onChange={onChangeHandler} value={name} />
                        <select value={gender} name="gender" onChange={onChangeHandler}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter Your userName" name="userName" onChange={onChangeHandler} value={userName} />
                        <input type="email" placeholder="Enter email" name="email" onChange={onChangeHandler} value={email} />
                    </div>
                    <div>
                        <input type="text" placeholder="Enter mobile number" name="mobile" onChange={onChangeHandler} value={mobile} />
                        <input type="password" placeholder="Enter Password" name="password" onChange={onChangeHandler} value={password} />
                    </div>

                    <div>
                    <input type="text" placeholder="Enter Your Address" name="address" onChange={onChangeHandler} value={address} />
                        <select value={department} name="department" onChange={onChangeHandler}>
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
                        </select>
                    </div>

                    <div>
                        <input type="text" placeholder="Added By " name="addedByDean"  value={addedByDean} />
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
                            to={"/admin/dashboard"}
                            style={{ textDecoration: "none", color: "#271776ca" }}
                        >
                            Dashboard
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

export default DoctorSignup