import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/foto.png'

const Header = () => {
  return (
    <div className="container header__container">
      <h5> Olá eu sou o </h5>
      <h1> Matheus Quaresma </h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />

      <div className="me">
        <img src={ME} alt="me" />
      </div>
    </div>
  )
}

export default Header