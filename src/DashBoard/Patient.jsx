import React, { useEffect, useState } from 'react'
import './patient.scss'
import axios from 'axios';
//import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
function Patient({ columns, type }) {
    const [patient, setatient] = useState([])
    let navigate = useNavigate();
    async function fetchPatient() {
        try {
            let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/patient`);
         //   console.log(res.data)
            setatient(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPatient()
    }, [])

    function onClickHandler(referenceNo) {
        if (type === "admin") {
            navigate(
                `/patient/${referenceNo}`,
                {
                    state: {
                        referenceNo
                    }
                }
            )
        }
        if (type === "doctor") {
            navigate(
                `/doc/patient/${referenceNo}`,
                {
                    state: {
                        referenceNo
                    }
                }
            )
        }
        if (type === "recep") {
            navigate(
                `/recep/patient/${referenceNo}`,
                {
                    state: {
                        referenceNo
                    }
                }
            )
        }

    }
    function onClickHandler2(_id, patientName, mobileNumber, email, address, aadhar, department, doctorName, appointmentTime) {
        if (type === "admin") {
            navigate(
                `/patient/edit/${_id}`,
                {
                    state: {
                        _id, patientName, mobileNumber, email, address, aadhar, department, doctorName,
                        appointmentTime: String(appointmentTime).slice(0, 16)

                    }
                }
            )
        }
        if (type === "doctor") {
            navigate(
                `/doc/patient/edit/${_id}`,
                {
                    state: {
                        _id, patientName, mobileNumber, email, address, aadhar, department, doctorName,
                        appointmentTime: String(appointmentTime).slice(0, 16)

                    }
                }
            )
        }

        if (type === "recep") {
            navigate(
                `/recep/patient/edit/${_id}`,
                {
                    state: {
                        _id, patientName, mobileNumber, email, address, aadhar, department, doctorName,
                        appointmentTime: String(appointmentTime).slice(0, 16)

                    }
                }
            )
        }

    }
    const actionColumn = [{
        width: 250, renderCell: (params) => {
            return (
                <div className="cellAction">

                    <button><div className="viewButton" onClick={() => onClickHandler(params.row._id)}>View</div></button>
                    <button><div className="editButton" onClick={() => onClickHandler2(params.row._id, params.row.patientName, params.row.mobileNumber, params.row.email, params.row.address, params.row.aadhar, params.row.department, params.row.doctorName, params.row.appointmentTime)}>Edit</div></button>
                </div>
            );
        },
    },
    ];
    return (
        <div className='datatable'>
            {/* <div className="datatableTitle">
                <Link to={'/appointment'} className='link'>
                    New Patient Appointment
                </Link>
            </div> */}
            {/* <DataGrid
                className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9, 10]}
                checkboxSelection
            /> */}
            <DataGrid
                className="datagrid"
                rows={patient}
                columns={columns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                pageSizeOptions={[9, 10]}
                checkboxSelection
                getRowId={(row) => row._id}
            />
        </div>
    )
}

export default Patient