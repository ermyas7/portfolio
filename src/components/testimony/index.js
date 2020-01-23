import React from 'react';
import './Testimony.scss';
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
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHLn-bca-wWTA/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=GhoOMgFkTB4wwHBVcl6r6vf8paWCAb-LQk3PZUPLVL8" alt="user"/>
                    </div>
                    <h4 className="testimony-card-credentials">
                    Manuj Gupta
                    </h4>
                    <h4 className="testimony-card-credentials">
                    CEO, Orane Consulting, India
                    </h4>
                    <p className="testimony-card-text">
                    I must say his ability to understand design requirements and delivery of application front end are reliable and professional.
                    </p>
                </div>
                <div className="testimony-card">
                    <div className="testimony-card-img">
                        <img src="https://cdn2.f-cdn.com/ppic/117525845/logo/27585662/dtu4B/profile_logo_.jpg" alt="user"/>
                    </div>
                    <h4 className="testimony-card-credentials">
                    Mattias
                    </h4>
                    <h4 className="testimony-card-credentials">
                    Entrepreneur, Sweden
                    </h4>
                    <p className="testimony-card-text">
                    Worked several times, and still working together. Very loyal and talented.
                    </p>
                </div>

                <div className="testimony-card">
                    <div className="testimony-card-img">
                        <img src="https://cdn5.f-cdn.com/ppic/70886978/logo/11068330/YWFve/profile_logo_.JPG" alt="user"/>
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
