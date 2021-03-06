import React from 'react';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Education />
    <Footer />

    </div>
  );
}

export default App;
