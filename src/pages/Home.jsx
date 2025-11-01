
import React from 'react'

import Me from '../components/Me'
import About from '../components/About'
import Education from '../components/Education.jsx'
import Skill from '../components/Skill'
import Projects from '../components/Projects.jsx'
import Work from '../components/Work'
import Volunteering from '../components/Volunteering.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Me />
      <About />
      <Education/>
      <Skill />
      <Projects />
      <Work />
      <Volunteering/>
      <Footer/>
    </div>
  )
}

export default Home
