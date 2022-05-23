import React from 'react'
import './skill.css'
import { BsCheckCircleFill } from "react-icons/bs";

const Skill = () => {
  return (
    <section id='skill'>
      <h2> Minhas habilidades </h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>HTML</h4>
              <small className="text-light"> Experiente </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>CSS</h4>
              <small className="text-light"> Experiente </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>JavaScript</h4>
              <small className="text-light"> Intermediário </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>React</h4>
              <small className="text-light"> Intermediário </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>React Native</h4>
              <small className="text-light"> Intermediário </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>Angular</h4>
              <small className="text-light"> Básico </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>Phoenix</h4>
              <small className="text-light"> Intermediário </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>Boostrap</h4>
              <small className="text-light"> Experiente </small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>NodeJs</h4>
              <small className="text-light"> Experiente </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>MongoDB</h4>
              <small className="text-light"> Experiente </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>MySQL</h4>
              <small className="text-light"> Intermediário </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>Python</h4>
              <small className="text-light"> Intermediário </small>
            </article>
            <article className="skill__detail">
              <BsCheckCircleFill />
              <h4>.NET</h4>
              <small className="text-light"> Intermediário </small>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
      </div>
    </section>
  )
}

export default Skill