import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from "react-toastify";


function ReceptionistSignup({type}) {

  let navigate = useNavigate();
  const { user } = useContext(AuthContext)
  let [data, setData] = useState({
    name:"",
    userName:"",
    password:"",
    gender:"",
    email:"",
    mobile:"",
    address:"",
    addedBy:user.name
  })
  const { name, userName, password, gender, email, mobile, address, addedBy  } = data

  function onChangeHandler(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e) {
    try {
      e.preventDefault();
      //console.log(data);
      const token = JSON.parse(localStorage.getItem('token')).token;
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/receptionist/signup`, data,
        {
          headers:{
              authorization:`Bearer ${token}`
          }
      }
      )
      //console.log(res.data)
      const confirmed = window.confirm("Are you submited the signup form?");
      if (!confirmed) return;
      toast.success("Successfully Registered! Thank You")
      //window.alert("Thank You")
      setData({
        name:"",
        userName:"",
        password:"",
        gender:"",
        email:"",
        mobile:"",
        address:"",
        addedBy:""
      })
      if( type==="admin"){navigate("/receptionist")}
      if( type==="doctor"){navigate("/doc/receptionist")}


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
    setData({
      name:"",
      userName:"",
      password:"",
      gender:"",
      email:"",
      mobile:"",
      address:"",
      addedBy:""
    });
  }
  return (
    <>
      <div className="container form-component register-form">
        <h2>Receptionist Signup</h2>
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
            <input type="text" placeholder="Added By " name="addedBy" value={addedBy} />

          </div>


          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            {type === "admin" ? ( <Link
              to={"/admin/dashboard"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Dashboard
            </Link>):(   <Link
              to={"/doctor/dashboard"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Dashboard
            </Link>) }
         
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

export default ReceptionistSignup