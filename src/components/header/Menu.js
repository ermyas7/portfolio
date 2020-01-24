import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

const Menu = () => {
    const toggle = () => {
        document.getElementById("menu").checked = false;
    }
    return (
        <div className="menu">
            <h4 className="menu-name">Ermyas Fekadu</h4>
            <div className="menu-icon">
                <input type="checkbox"  id="menu"/>
                <label htmlFor="menu">
                    <span className="menu-icon-bar">
                    </span>
                </label>
                <div className="menu-side">
                    <ul className="menu-side-item" onClick={toggle}>
                        <li className="menu-side-list">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="menu-side-list">
                            <Link to="/project">Projects</Link>
                        </li>
                        <li className="menu-side-list">
                            <Link to="/">About</Link>
                        </li>
                        <li className="menu-side-list">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;
