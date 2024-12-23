import React from 'react';
import { motion } from 'framer-motion';
import cornellLogo from '../../assets/cornell-logo.jpeg'; 
import vandyLogo from '../../assets/vanderbilt-logo.png';
import './Education.css';

function Education() {
    return (
        <div className="app__education">
            <motion.div className="app__education-content">
                <h2>Education</h2>
                
                <div className="education-item">
                    <div className="education-logo">
                        <img src={cornellLogo} alt="Cornell Tech Logo" />
                    </div>
                    <div className="education-details">
                        <div style={{ height: '0.5rem' }}></div>
                        <h3>Cornell Tech (Cornell University)</h3>
                        <p className="education-date">2024 - 2025</p>
                        <h4>Master of Engineering in Computer Science </h4>
                    </div>
                </div>

                <div className="education-item">
                    <div className="education-logo">
                        <img src={vandyLogo} alt="Vanderbilt University Logo" />
                    </div>
                    <div className="education-details">
                        <h3>Vanderbilt University</h3>
                        <p className="education-date">2020 - 2024</p>
                        <h4>Bachelor of Science in Computer Science</h4>
                        <h4>Bachelor of Science in Human & Organizational Development</h4>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Education;