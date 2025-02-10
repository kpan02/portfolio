import React from 'react';
import { motion } from 'framer-motion';
import cornellLogo from '../../assets/cornell-logo.jpeg'; 
import vandyLogo from '../../assets/vanderbilt-logo.png';
import { courseLinks } from './courseLinks';
import './Education.css';

const courseData = {
    graduate: {
        title: "Computer Science (Graduate)",
        courses: [
            "Applied Machine Learning",
            "Machine Learning Engineering",
            "Data Engineering",
            "Machine Learning Hardware",
            "Full Stack Development",
            "Advanced Algorithms",
            "Product Development Studio",
            "Startup Studio",
            "HCI and Design",
            "Venture Capital",
            "Security and Privacy",
        ]
    },

    undergraduate: {
        title: "Computer Science",
        courses: [
            "Data Structures",
            "Algorithms",
            "Software Engineering",
            "Database Systems",
            "Operating Systems",
            "Java Programming",
            "Discrete Math",
            "Software Design",
            "Computers & Ethics",
            "Computer Architecture",
            "Programming Languages",
            "Independent Research",
            "Network Analysis",
            "Virtual Reality Design",
        ]
    },
    hod: {
        title: "Human & Organizational Development",
        courses: [
            "Applied Human Development",
            "Leadership Theory",
            "Systems Thinking",
            "Understanding Organizations",
            "Talent Management",
            "Systematic Inquiry",
            "Public Policy",
            "Advanced Organizational Theory",
            "Small Group Behavior",
            "Evidence-based Practice in Organizations",
            "Education & Economic Development",
            "Continuous Improvement in Organizations",
            "Capstone Internship",
        ]
    }
};

function Education() {
    return (
        <div className="app__education">
            <motion.div className="app__education-content">
                <div style={{ height: '2rem' }}></div>
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

                <div style={{ height: '1rem' }}></div>

                <div className="coursework-section">
                    <div style={{ height: '1rem' }}></div>
                    <h3>Coursework</h3>
                    {Object.values(courseData).map((category, index) => (
                        <motion.div key={index} className="course-category-container">
                            <h4>{category.title}</h4>
                            <div className="course-list">
                                {category.courses.map((course, courseIndex) => (
                                    <a 
                                        key={courseIndex} 
                                        href={courseLinks[course]} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="course-tag"
                                    >
                                        {course}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Education;