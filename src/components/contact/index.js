import React from 'react';
import './Contact.scss';

const index = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <h2 className="contact-heading heading-secondary">
                Got a project in mind? Drop me a line! Let's make something awesome together.
                </h2>

            <form  className="contact-form">
                <div className="contact-form-detail">
                    <input type="text" className="contact-form-name"
                    name="name" placeholder="Enter your full name"/>
                    <input type="text" className="contact-form-name"
                    name="email" placeholder="Enter your email"/>
                </div>
                <div className="contact-form-option">
                    <select name="time" id="time">
                    <option value="1">Choose A Timeframe</option>
                        <option value="1">2 - 4 Weeks</option>
                        <option value="2">1 - 2 Months</option>
                        <option value="3">2 - 4 Months</option>
                        <option value="4">6 Months</option>
                        <option value="5">6+ Months</option>
                    </select>
                </div>
                <div className="contact-form-option">
                    <select name="cost" id="time">
                    <option value="1">Choose A Budget</option>
                        <option value="1">Less Than $2,000</option>
                        <option value="2"> $2,000 - 4,000$</option>
                        <option value="2"> $4,000 - 8,000$</option>
                        <option value="2"> $8,000 - 15,000$</option>
                        <option value="2"> $15,000 +</option>
                    </select>
                </div>
                <div className="contact-form-message">
                <textarea name="message">
                    How Can I Help You?
                </textarea>
                </div>
                <botton className="btn btn-blue">Let's Work together</botton>
            </form>
        </div>    
    </div>
    )
}

export default index;
