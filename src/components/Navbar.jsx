import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './navbar.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
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

            {/* Mobile Menu */}
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        initial={{ x: 500 }}
                        whileInView={{ x: [500, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['about', 'experience', 'education', 'projects', 'resume', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;