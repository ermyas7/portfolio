import React from 'react';

import './Header.scss';

import Menu from './Menu';
import Home from './Home';

const index = () => {
    return (
        <div className="header" id="home">
            <Home/>
        </div>
    )
}

export default index;