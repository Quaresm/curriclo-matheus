import React from "react";
import "./education.css";
import { BsJournalBookmark } from "react-icons/bs";
import ME from "../../assets/foto-1.png";

const Education = () => {
  return (
    <section id="education">
      <h2 className="education__section"> Educacional </h2>
      <div className="container__education__all">
        <div className="education__content">
          <div className="education__cards">
            <article className="education__card">
              <BsJournalBookmark className="education__icon" />
              <h5>Dados Acadêmicos</h5>
            </article>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="container education__container">
            <div className="education__me">
              <div className="education__me-img">
                <img src={ME} alt="About Image" />
              </div>
            </div>
            <div className="education__text__me">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
