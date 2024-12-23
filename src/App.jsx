import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from 'react'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App