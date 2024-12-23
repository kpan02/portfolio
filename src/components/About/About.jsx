import React from 'react';
import { motion } from 'framer-motion';
import headshot from '../../assets/Headshot.jpg';
import './About.css';

const About = () => {
    return (
        <div className="app__about">
            <div className="app__about-content">
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__about-img"
                >
                    <img src={headshot} alt="Kevin Pan headshot" />
                </motion.div>

                <motion.div
                    whileInView={{ opacity: [0, 1], x: [50, 0] }}  // Changed y to x for side slide
                    transition={{ duration: 0.5 }}
                    className="app__about-text"
                >
                    <h2>Kevin Pan</h2>
                    <h4>🎓&nbsp;Computer Science @ Cornell Tech / Vanderbilt</h4>
                    <h4>🗽&nbsp;&nbsp;New York City</h4>
                    <div style={{ height: '2rem' }}></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;