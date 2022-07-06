import React from 'react';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './components/about/About';
import Education from './components/education/Education';
import Skill from './components/skill/Skill'
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <div className='global-container'>
      <Header />
      <Navbar />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Contact />
      <Footer />
    </div>
    )
}

export default App