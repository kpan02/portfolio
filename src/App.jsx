import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

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