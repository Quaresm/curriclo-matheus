import React from 'react';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Services />
      <Contact />
      <Footer />
    </>
    )
}

export default App