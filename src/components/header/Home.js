import React from 'react';
import './Header.scss';

import profile from '../../assets/images/profile.JPG';
import upwork from '../../assets/images/upwork.png';
import freelancer from '../../assets/images/freelancer.jpeg';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';

function Home() {
    return (
        <div className="home">
            <ul className="home-contact">
                <li className="home-contact-item">
                <a href="https://www.linkedin.com/in/ermyas/" target="blank">
                        <img src={linkedin} alt="linkedin icon"/>
                    </a>
                </li>
                <li className="home-contact-item">
                <a href="https://github.com/ermyas7" target="blank">
                        <img src={github} alt="github icon"/>
                    </a>
                </li>
                <li className="home-contact-item">
                    <a href="https://www.freelancer.in/u/Ermicho" target="blank">
                        <img src={freelancer} alt="freelancer icon"/>
                    </a>
                </li>
                <li className="home-contact-item">
                    <a href="https://www.upwork.com/freelancers/~019979c8e1864238a8" target="blank">
                        <img src={upwork} alt="upwork icon"/>
                    </a>
                </li>
            </ul>
            <div className="home-profile">
                <div className="home-description">
                    <div className="home-headings">
                        <h1 className="home-heading">
                            Ermyas Fekadu ,
                        </h1>
                        <h1 className="home-heading">
                            Freelance
                        </h1>
                        <h1 className="home-heading">
                        Full Stack JavaScript Developer
                        </h1>
                    </div>

                    <p className="home-description-text">
                    Hi, my name is Ermyas Fekadu and I'm a freelance web developer based in India. I have over 3 years of experience in the software development industry. I'm specialized in Front-end Development. You can check out my work below.
                    </p>
                    <div className="home-scroll">
                        <a href="#project">
                        <span>
                        scroll down    
                        </span>
                        <i className="fas fa-long-arrow-alt-down"></i>
                        </a>
                    </div>
                </div>

                <div className="home-profile-img">
                    <img src={profile} alt="profile pic"/>
                </div>
            </div>
        </div>
    )
}

export default Home;
