import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Nav from "./Nav/Nav"
import About from "./About/About"
import Skills from "./Skills/Skills"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
import "./Styles/app.css"
import Background from './background/Background'
import PlayerStats from './playerStats/PlayerStats'

const App = () => {
  return (
    <>
      <Router>
        <Nav/>
        <Background/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <PlayerStats/>
      </Router>
    </>
  )
}

export default App
