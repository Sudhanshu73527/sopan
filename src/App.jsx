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
import ThematicFocus from './Components/ThematicFocus/ThematicFocus'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/> 
      <Herosection/>
      <ThematicFocus/>
      <Director/>
      <Aboutus/>
      <Whatwedo/>
      <FreeEducationPrograms/>
      <Asd/>
      <TherapistRoles/>
      <Ourgallary/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
