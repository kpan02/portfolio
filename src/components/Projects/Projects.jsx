import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';


import placeholderImage from '../../assets/cornell-logo.jpeg'; // temporary placeholder

const projectsData = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Fall 2024",
        image: placeholderImage,
        technologies: ["Skill a", "Skill b", "Skill c", "Skill d"]
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Fall 2024",
        image: placeholderImage,
        technologies: ["Skill a", "Skill b", "Skill c", "Skill d"]
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Fall 2024",
        image: placeholderImage,
        technologies: ["Skill a", "Skill b", "Skill c", "Skill d"]
    },
    {
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Fall 2024",
        image: placeholderImage,
        technologies: ["Skill a", "Skill b", "Skill c", "Skill d"]
    },
    {
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Fall 2024",
        image: placeholderImage,
        technologies: ["Skill a", "Skill b", "Skill c", "Skill d"]
    }
];

function Projects() {
    return (
        <div className="app__projects">
            <motion.div className="app__projects-content">
                <div style={{ height: '2rem' }}></div>
                <h2>Projects</h2>
                <div style={{ height: '1rem' }}></div>
                
                <div className="projects-container">
                    {projectsData.map((project, index) => (
                        <motion.div 
                            key={index}
                            className="project-card"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <p className="project-date">{project.date}</p>
                                <p className="project-description">{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Projects;