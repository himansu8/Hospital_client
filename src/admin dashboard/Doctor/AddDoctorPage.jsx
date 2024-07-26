import React from 'react'
import Hero from '../../components/Hero'
import DoctorSignup from './DoctorSignup'

function AddDoctorPage() {
  return (
    <>
      <Hero
        title={"Signup Doctor | Apna Hospital"}
        imgUrl={"/signin.png"}
      />
      <DoctorSignup/>
      
    </>
  )
}

export default AddDoctorPage