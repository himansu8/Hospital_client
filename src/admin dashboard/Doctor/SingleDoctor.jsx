import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import './singledoctor.scss'
function SingleDoctor() {
    const { state } = useLocation();
  const [doctor, setDoctor] = useState({});
  const doctorId = state.doctorId;

  const fetchDoctor = async (doctorId) => {
    try {
      const token = JSON.parse(localStorage.getItem('token')).token;
      let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/doctor/${doctorId}`,
        {
          headers:{
            authorization:`Bearer ${token}`
        }
        }
      );
      setDoctor(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDoctor(doctorId);
  }, [doctorId]);

  return (
    <div className="single-doctor-container">
      <Link to="/doctor" className="back">
        BACK
      </Link>
      <table className="single-doctor-table">
        <tbody>
          <tr>
            <th>Doctor Id:</th>
            <td>{doctor._id}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>{doctor.name}</td>
          </tr>
          <tr>
            <th>User Name:</th>
            <td>{doctor.userName}</td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td>{doctor.gender}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{doctor.email}</td>
          </tr>
          <tr>
            <th>Mobile Number:</th>
            <td>{doctor.mobile}</td>
          </tr>
          <tr>
            <th>Address:</th>
            <td>{doctor.address}</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>{doctor.department}</td>
          </tr>
          <tr>
            <th>Added By:</th>
            <td>{doctor.addedByDean}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SingleDoctor