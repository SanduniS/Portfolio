
import React from 'react'

import Me from '../components/Me'
import About from '../components/About'
import Skill from '../components/Skill'
import Projects from '../components/Projects.jsx'
import Work from '../components/Work'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Me />
      <About />
      <Skill />
      <Projects />
      <Work />
      <Contact />
    </div>
  )
}

export default Home
