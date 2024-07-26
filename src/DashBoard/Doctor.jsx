import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './doctor.scss'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function DoctorDashboard({ columns }) {
    const [doctorData, setDoctorData] = useState([])
    let navigate = useNavigate();
    async function fetchDoctor() {
        try {
            const token = JSON.parse(localStorage.getItem('token')).token;
            let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/doctor`,
                {
                    headers:{
                        authorization:`Bearer ${token}`
                    }
                }
            );
            //console.log(res.data)
            //console.log(res.data?.length)
            setDoctorData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDoctor()
    }, [])
    async function deleteDoctor(doctorId) {
        try {
            const token = JSON.parse(localStorage.getItem('token')).token;
            await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/doctor/${doctorId}`,
                {
                    headers:{
                        authorization:`Bearer ${token}`
                    }
                }
            );
            let updatedDoctor = doctorData.filter((ele) => ele._id !== doctorId);
            setDoctorData(updatedDoctor);             //Refersh the doctor database after deleted
            //window.alert(`Successfully Deleted`)
            toast.success("Successfully Deleted")
        } catch (error) {
            console.log(error)
        }
    }
    function onClickHandler(doctorId) {

        navigate(
            `/doctor/${doctorId}`,
            {
                state: {
                    doctorId
                }
            }
        )
    }
    function onClickHandler2(_id, name, mobile, email, address, department) {

        navigate(
            `/doctor/edit/${_id}`,
            {
                state: {
                    _id, name, mobile, email, address, department
                }
            }
        )
    }

    const actionColumn = [{
        width: 250, renderCell: (params) => {
            return (
                <div className="cellAction">
                    <button><div className="viewButton" onClick={() => onClickHandler(params.row._id)}>View</div></button>
                    <button><div className="editButton" onClick={() => onClickHandler2(params.row._id, params.row.name, params.row.mobile, params.row.email, params.row.address, params.row.department)} >Edit</div></button>
                    <button><div className="deleteButton" onClick={() => deleteDoctor(params.row._id)}  >Delete</div></button>
                </div>
            );
        },
    },
    ];



    return (
        <>

            <div className='datatable'>
                <div className="datatableTitle">
                    <Link to={'/doctor/signup'} className='link'>
                        Add New Doctor
                    </Link>
                </div>
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
                    rows={doctorData}
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
        </>

    )
}

export default DoctorDashboard