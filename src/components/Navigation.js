import React from 'react';


// Get HTML head element
let head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
let link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = 'style.css';

// Append link element to HTML head
head.appendChild(link);

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}

export default Navigation;