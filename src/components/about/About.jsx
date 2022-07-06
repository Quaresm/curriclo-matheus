import React from "react";
import "./about.css";
import ME from "../../assets/foto-1.png";
import { BsAward } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h2 className='about__section'> Sobre mim </h2>

      <div className="container__all">
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-img">
              <img src={ME} alt="About Image" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experiência</h5>
              <small>2+ Anos trabalhando</small>
            </article>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>

            <a href="#contact" className="btn btn-primary">
              Vamos conversar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
