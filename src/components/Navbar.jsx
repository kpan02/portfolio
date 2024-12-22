import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="app__navbar">
            <ul className="app__navbar-links">
                {['about', 'experience', 'education', 'projects', 'resume', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`${item}`}>{item}</a>

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;