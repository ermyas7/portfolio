import React from 'react';
import './Testimony.scss';

import review1 from "../../assets/images/testimony-1.jpg";
import review2 from "../../assets/images/testimony-2.jpg";
import review3 from "../../assets/images/testimony-3.jpg";

const index = () => {
    const slider = (evt) => {
        console.log(evt);
    }
    return (
        <div className="testimony">
            <div className="testimony-title">
                <span className="testimony-hr"></span>
                <h1 className="testimony-heading heading-primary">
                    Testimonials
                </h1>
            </div>
            <div className="testimony-cards">
                {/* <div className="testimony-change">
                <i className="fas fa-chevron-left testimony-change-left" onClick={slider}></i>
                <i className="fas fa-chevron-right testimony-change-right" onClick={slider}></i>
                </div> */}
                <div className="testimony-card">
                    <div className="testimony-card-img">
                        <img src={review1} alt="user"/>
                    </div>
                    <h4 className="testimony-card-credentials">
                    Manuj Gupta
                    </h4>
                    <h4 className="testimony-card-credentials">
                    CEO, Orane Consulting, India
                    </h4>
                    <p className="testimony-card-text">
                    I must say Ermyas's ability to understand design requirements and delivery of application front end are reliable and professional.
                    </p>
                </div>
                <div className="testimony-card">
                    <div className="testimony-card-img">
                        <img src={review2} alt="user"/>
                    </div>
                    <h4 className="testimony-card-credentials">
                    Mattias
                    </h4>
                    <h4 className="testimony-card-credentials">
                    Entrepreneur, Sweden
                    </h4>
                    <p className="testimony-card-text">
                    I Worked with Ermyas several times, he is very loyal and talented.
                    </p>
                </div>

                <div className="testimony-card">
                    <div className="testimony-card-img">
                        <img src={review3} alt="user"/>
                    </div>
                    <h4 className="testimony-card-credentials">
                    Norlyn
                    </h4>
                    <h4 className="testimony-card-credentials">
                    Client, Philippines
                    </h4>
                    <p className="testimony-card-text">
                    Ermyas is so hard working and patient with researching. So far, the work is great. Thank you. Looking forward to work with him again in the future.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default index;
