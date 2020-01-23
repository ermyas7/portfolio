import React from "react";
import "./Project.scss";

const Card = ({card, ind}) => {

  return (
    <div className="project-list-item">
      <div className="project-card">
        <div className={`project-card-side project-card-side__front project-card-side__front-${ind + 1}`}></div>
        <div className="project-card-side project-card-side__back">
  <h2 className="project-card-title">{card.title}</h2>
          <h4 className="project-card-tech">Technologies Used</h4>
          <ul className="project-card-description">
            {
            card.techs.map((tech, id) => (
                <li className="project-card-description__item">
                <span className="project-card-description__item-title">
                  {tech.name} --
                </span>
                <span className="project-card-description__item-value">
                  {tech.value}
                </span>
              </li>  
            ))
            }
          </ul>

          <a className="project-card-btn btn btn-white" href={card.link} target="blank">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
