import React from "react";
import "./Project.scss";
import data from './data.json';
import Card from './Card';

const index = () => {
    console.log(data);
    const cards = data.map((card, ind) => (
        <Card card={card} ind={ind}/>
    ))
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-title">
          <span className="project-hr"></span>
          <h2 className="project-heading">Latest Work</h2>
        </div>
        <div className="project-list">

          {/*card s */}
          {
              cards
          }  

        </div>
        <div className="project-btn">
          <button className="project-btn-icon btn btn-blue">
            See All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
