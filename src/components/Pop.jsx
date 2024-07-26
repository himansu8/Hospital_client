import React, { useState } from 'react'
import './pop.css'
import { useNavigate } from 'react-router-dom';
function Pop({ setOpen }) {
    const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useNavigate()
    const handleLogin = () => {
        if (selectedRole) {
            navigate(`/login/${selectedRole}`);
            // window.location.href = 'http://localhost:3010/users';
            // window.location.href = `http://localhost:3333/${selectedRole}/dashboard`
            setOpen(false)
        }
    };
    return (
        <div className='containerpop'>
            <div className="wrapperpop">
                <div className="close" onClick={() => setOpen(false)}>X</div>
                <select
                    className="loginDropdown"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                >
                    <option value="">Select Role</option>
                    <option value="admin" style={{ color: 'navy', backgroundColor: 'lightgrey', borderRadius: '5px', padding: '5px' }}>Admin</option>
                    <option value="doctor" style={{ color: 'darkgreen', backgroundColor: 'lightyellow', borderRadius: '5px', padding: '5px' }}>Doctor</option>
                    <option value="receptionist" style={{ color: 'maroon', backgroundColor: 'lightblue', borderRadius: '5px', padding: '5px' }}>Receptionist</option>
                </select>
                <button className="loginBtn btn" onClick={handleLogin} style={{ cursor: "pointer" }}>
                    LOGIN
                </button>
            </div>
        </div>
    )
}

export default Pop