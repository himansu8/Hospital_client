import React, { useContext, useState } from 'react'
//import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { toast } from "react-toastify";
import axios from 'axios'

function ReceptionistLogin() {
  let navigate = useNavigate()

  let [data, setData] = useState({
    email: undefined,
    password: undefined
  })
  const {  dispatch } = useContext(AuthContext)

  const { email, password } = data

  function onChangeHandler(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e) {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" })
    try {
      let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/receptionist/login`, data)
      const {token, details} =  res.data;
      localStorage.setItem("token", JSON.stringify({token, details}))
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
      toast.success("You are Loged In !")
      navigate('/recep/dashboard');
    } catch (error) {
      dispatch({ type: "LOGIN_failure", payload: error.response.data })
      let errorString = "";
      //handling express validator errors
      if (error.response.data.errors) {
        error.response.data.errors.forEach((ele) => {
          errorString += `${ele.msg} `
        })
        toast.error(errorString);
      }
      else {
        errorString = error.response.data.error;
        toast.error(errorString);
      }
    }
  }
  return (
    <>
      <div className="container form-component login-form">
        <h2>Hello Receptionist !!</h2>
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
            {/* <p style={{ marginBottom: 0 }}>Not Registered?</p> */}
            {/* <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Register Now
            </Link> */}
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" onClick={onSubmit} >Login</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default ReceptionistLogin