import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "kp639@cornell.edu";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className="app__contact">
            <div style={{ height: '2rem' }}></div>

            <div className="app__contact-header">
                <h2>Get in Touch</h2>
            </div>

            <div style={{ height: '2rem' }}></div>
            
            <div className="app__contact-cards">
                <div 
                    className="contact-card"
                    onClick={handleCopyEmail}
                    style={{ cursor: 'pointer' }}
                >
                    <HiMail />
                    <span>{copied ? 'Copied!' : 'Email'}</span>
                </div>

                <a 
                    href="https://linkedin.com/in/kevinpan02" 
                    className="contact-card"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>

                <a 
                    href="https://github.com/kpan02" 
                    className="contact-card"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>

                {/* <a 
                    href="https://www.instagram.com/easymoneysniper/" 
                    className="contact-card"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                    <span>Instagram</span>
                </a> */}
            </div>


            <div className="app__contact-footer">
                <p>💡 Interested in this portfolio? Check out the repo <a href="https://github.com/kpan02/portfolio">here</a>.</p>
            </div>
        </div>
    );
};

export default Contact;