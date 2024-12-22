import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';

import { useState } from 'react'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App