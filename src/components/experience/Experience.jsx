import React from "react";
import "./experience.css";
import { BsCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience__section">
        <div className="container skills__container">
          <div className="skills__frontend">
            <h2 className="experience__title"> Experiências </h2>
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
