import React, { useState } from 'react'
import { toast } from "react-toastify";
import axios from "axios";
function MessagrForm() {
const [senderData, setSenderData] = useState({
  firstName:"",
  lastName:"",
  email:"",
  phone:"",
  message:""
})
const {firstName, lastName, email, phone, message} = senderData

function onChangeHandler(e) {
  setSenderData({
    ...senderData,
    [e.target.name]: e.target.value
  })
}
  const onSubmit = async (e) => {
    try{
      e.preventDefault();
      //console.log(senderData)
      const confirmed = window.confirm("Are you send your message?");
      if (!confirmed) return;
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/message/send`, senderData)
     // console.log(res.data)
        setSenderData({
          firstName:"",
          lastName:"",
          email:"",
          phone:"",
          message:""
        })
        toast.success("Message sent!")
    }
    catch (error) {
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
  };
  return (
    <>
      <div className="container form-component message-form">
        <h2>Send Us A Message</h2>
        <form>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              name="firstName"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              name="lastName"
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={onChangeHandler}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              name="phone"
              onChange={onChangeHandler}
            />
          </div>
          <textarea
            rows={7}
            placeholder="Message"
            value={message}
            name="message"
            onChange={onChangeHandler}
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" onClick={onSubmit}>Send</button>
          </div>
        </form>
        <img src="/Vector.png" alt="vector" />
      </div>
    </>
  )
}

export default MessagrForm