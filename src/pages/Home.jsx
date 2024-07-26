import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Department from '../components/Department'
import MessageForm from '../components//MessagrForm'

function Home() {
  return (
<>
<Hero title={"Welcome to Apna Hospital | Your Trusted Healtcare provider | 🏥"} imgUrl={"/hero.png"}/>
<Biography imgUrl={"/about.png"}/>
<Department/>
<MessageForm/>
</>
  )
}

export default Home