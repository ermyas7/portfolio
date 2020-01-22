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
            </div>
        </div>
    )
}

export default Menu;
