import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/Herosection/Herosection'
import Director from './Components/Director/Director'
import Whatwedo from './Components/Whatwedo/Whatwedo'
import Aboutus from './Components/Aboutus/Aboutus'
import Footer from './Components/Footer/Footer'
import FreeEducationPrograms from './Components/FreeEducationPrograms/FreeEducationPrograms'
import Ourgallary from './Components/ourgallary/Ourgallary'
import Asd from './Components/Asd/Asd'
import TherapistRoles from './Components/TherapistRoles/TherapistRoles'

const App = () => {
  return (
    <div>
      <Navbar/> 
      <Herosection/>
      <Director/>
      <Aboutus/>
      <Whatwedo/>
      <FreeEducationPrograms/>
      <Asd/>
      <TherapistRoles/>
      <Ourgallary/>
      <Footer/>
    </div>
  )
}

export default App
