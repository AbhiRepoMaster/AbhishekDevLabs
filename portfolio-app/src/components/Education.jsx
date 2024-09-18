import React from 'react';
import { educationData } from './data/data'; 
import './css/education.css'; 
const Education = () => {
    return (
        <div className="education-container">
            <h2>Education</h2>
            <div className="education-grid">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h3>{edu.institution}</h3>
                        <p className="duration">{edu.duration}</p>
                        <p className="degree">{edu.degree}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
