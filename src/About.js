import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext } from './context/ProductContext'

const About = () => {

  const myName = useContext(AppContext)

  const data = {
    name: "Thapa Ecommerce"
  }
  return (
    <div>
      {myName}
      <HeroSection myData={data} />
    </div>
  )
}

export default About
