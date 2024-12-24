import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const location = useLocation();
    
    // Helper function to check if the link is active
    const isActive = (path) => {
        return location.pathname === `/${path}`;
    };
        
    return (
        <nav className="app__navbar">
            <ul className="app__navbar-links">
                {['about', 'experience', 'education', 'projects', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <Link 
                            to={`/${item}`}
                            className={isActive(item) ? 'active' : ''}
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            {!toggle && (
                <div className="app__navbar-menu-button" onClick={() => setToggle(true)}>
                    <HiMenuAlt4 />
                </div>
            )}

            {toggle && (
                <motion.div
                    className="app__navbar-menu-content"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <div className="app__navbar-menu-button" onClick={() => setToggle(false)}>
                        <HiX />
                    </div>
                    <ul>
                        {['about', 'experience', 'education', 'projects', 'contact'].map((item) => (
                            <li key={item}>
                                <Link 
                                    to={`/${item}`} 
                                    onClick={() => setToggle(false)}
                                    className={isActive(item) ? 'active' : ''}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;