import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'

function About() {
  return (
    <>
    <Hero
      title={"Learn More About Us | Apna Hospital | ଆମେ ସବୁବେଳେ ଆପଣଙ୍କ ସେବା ରେ ନିଓଜିତ"}
      imgUrl={"/about.png"}
    />
    <Biography imgUrl={"/whoweare.png"} />
  </>
  )
}

export default About