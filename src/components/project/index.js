import React from "react";
import "./Project.scss";
import Card from './Card';
import {Link} from 'react-router-dom';
const index = ({data, title, all}) => {
    const cards = data.map((card, ind) => (
        <Card card={card} ind={ind} key={ind}/>
    ));

    const btnStyle = all? {display: 'none'} : {display: 'block'};
  return (
    <div className="project" id="project">
      <div className="project-container">
        <div className="project-title">
          <span className="project-hr"></span>
  <h1 className="project-heading heading-primary">{title}</h1>
        </div>
        <div className="project-list">

          {/*card s */}
          {
              cards
          }  

        </div>
        <Link className="project-btn" style={btnStyle} to="/project">
          <button className="project-btn-icon btn btn-blue">
            See All Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
