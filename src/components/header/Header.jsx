import React from 'react'
import CTA from './CTA'
import ME from '../../assets/foto.png'
import './style.css'
import '../socials/socials.css'
import Socials from '../socials/Socials'


const Header = () => {
  return (
    <div className="container header-container">
      <h5> Olá eu sou o </h5>
      <h1> Matheus Quaresma </h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <div className='img-content'>
        <div className="border-img">
          <img className="me-img" src={ME} alt="me" />
        </div>
      </div>
      <Socials />
      <a href="#contact" className='scroll_down'> Scroll Down </a>
    </div>
  )
}

export default Header