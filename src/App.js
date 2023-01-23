import React from 'react'
import AboutMe from './Components/AboutMe'
import HeroComp from './Components/HeroComp'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Skill from './Components/Skill'

const App = () => {
  return (
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="1">
    <NavBar/>
    <HeroComp/>
    <AboutMe/>
    <Skill/>
    <Projects/> 
    <br /><br />
    </div>
  )
}

export default App
