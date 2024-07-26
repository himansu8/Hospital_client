import React from 'react'
import Hero from '../components/Hero';
import AppointMentForm from '../components/AppointMentForm';

function Appointment() {
 

  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Apna Hospital"}
        imgUrl={"/signin.png"}
      />
      <AppointMentForm/>
      
    </>
  )
}

export default Appointment