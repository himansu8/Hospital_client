import React, { useContext } from 'react'
//import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import {AuthContext} from '../context/AuthContext'


function AdminLogin() {
  let navigate = useNavigate()

  let [deanData, setDeanData] = useState({
      email: undefined,
      password: undefined
  })
  const { error, dispatch } = useContext(AuthContext)

  const { email, password } = deanData

  function onChangeHandler(e) {
      setDeanData({
          ...deanData,
          [e.target.name]: e.target.value
      })
  }

  async function onSubmit(e) {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" })
      try {
          // console.log(patientData);
          let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/dean/login`, deanData)
          // console.log(res.data)
          const { token, details } = res.data;
          localStorage.setItem("token", JSON.stringify({ token, details }))
          dispatch({ type: "LOGIN_SUCCESS", payload: details })
          toast.success("You are Loged In !")
          navigate('/admin/dashboard');
      } catch (error) {
        dispatch({ type: "LOGIN_failure", payload: error.response.data })
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
      toast.error(errorString);
      //window.alert(errorString)

    }
    else {
      //Custom errors
      errorString = error.response.data.error;
      // showAlert({
      //   type: "error",
      //   msg: errorString
      // })
      toast.error(errorString);
      //window.alert(errorString)

    }
  }
  }
  return (
    <>
    <div className="container form-component login-form">
      <h2>Hello Admin !!</h2>
      <p>Please Login To Continue</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
        voluptas expedita itaque ex, totam ad quod error?
      </p>
      <form >
        <input type="email" placeholder="Email" name="email" onChange={onChangeHandler} value={email} />
        <input type="password" placeholder="Password" name="password" onChange={onChangeHandler} value={password} />

        <div
          style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          {/* <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "#271776ca" }}
          >
            Register Now
          </Link> */}
        </div>
        <div  style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit" onClick={onSubmit}>Login</button>
        </div>
      </form>
      {error && <span>{error.message}</span>}
    </div>
    
  </>
  )
}

export default AdminLogin