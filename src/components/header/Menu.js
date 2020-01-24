import React from 'react';
import './Header.scss';

const Menu = () => {
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
                    <ul className="menu-side-item">
                        <li className="menu-side-list">
                            Home
                        </li>
                        <li className="menu-side-list">
                            About
                        </li>
                        <li className="menu-side-list">
                            Project
                        </li>
                        <li className="menu-side-list">
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;
