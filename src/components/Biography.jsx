import React from 'react'

function Biography({ imgUrl }) {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imgUrl} alt="about" />
      </div>
      <div className="banner">
        <p style={{ color: '#4682B4' }}> Biography</p>
        <h3 style={{ color: '#4682B4' }}>Who We Are</h3>
        <p>Welcome to Apna Hospital, where your health and well-being are our top priorities. At Apna Hospital, we are dedicated to providing exceptional healthcare services with compassion, excellence, and innovation. Our mission is to enhance the quality of life for our patients by delivering comprehensive medical care and fostering a patient-centered environment.</p>
        
        <br/>
        <p>Our team of experienced doctors, skilled nurses, and compassionate support staff work collaboratively to offer a wide range of medical services tailored to meet the diverse needs of our community. We are committed to ongoing education and the adoption of the latest medical advancements to ensure the highest standards of care.</p>
         <br/>
        <p>At Apna Hospital, we believe in treating every patient with kindness, empathy, and respect. Thank you for choosing us as your trusted healthcare partner.</p>

      </div>
    </div>
  )
}

export default Biography