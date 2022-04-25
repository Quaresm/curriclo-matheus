import React from 'react';
import About from '../../components/about/About';
import Education from '../../components/education/Education';
import Experience from '../../components/experience/Experience';
import Services from '../../components/services/Services';
import Contact from '../../components/contact/Contact';
import MainLayout from '../../components/main-layout/MainLayout';



const MainPage = () => {
  return (
    <MainLayout>
      <About />
      <Experience />
      <Education />
      <Services />
      <Contact />
    </MainLayout>  
  )
}

export default MainPage