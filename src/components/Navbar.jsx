import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import Pop from './Pop';
import { FaHospital } from 'react-icons/fa';
function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className={'container'}>
        {/* <div className="logo">
          <img src="/logo2.png" alt="logo" className="logo-img" />
        </div> */}
        <div className="logo" style={{ color: '#007bff', textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '24px' }}>
          <FaHospital style={{ marginRight: '10px', fontSize: '36px' }} />
          <span style={{ fontSize: '28px', fontWeight: 'bold' }}>ApnaHospital</span>
        </div>
        <div className={show ? 'navLinks showmenu' : 'navLinks'}  >
          <div className="links" >
            <Link to={'/'} onClick={toggleMenu} style={{ color: '#007bff'}}>
              Home
            </Link>
            <Link to={'/appointment'} onClick={toggleMenu} style={{ color: '#007bff'}}>
              Appointment
            </Link>
            <Link to={'/about'} onClick={toggleMenu} style={{ color: '#007bff'}}>
              About Us
            </Link>
          </div>
          <button
            className="loginBtn btn"
            onClick={() => setOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            LOGIN
          </button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
      </nav>
      {open && <Pop setOpen={setOpen} />}
    </>
  );
}

export default Navbar;
