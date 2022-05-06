import React from 'react'
import './about.css'
import ME from '../../assets/foto-1.png'
import {BsAward} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5> Conheça</h5>
      <h2> Sobre mim </h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>
      </div>

      <div className='about-container'>
        <div className='about-cards'>
          <article className='about-card'>
            <BsAward className='about-icon' />
            <h5>Experience</h5>
            <small>2+ Anos trabalhando</small>
          </article>

          <p>
            lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3
            lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About