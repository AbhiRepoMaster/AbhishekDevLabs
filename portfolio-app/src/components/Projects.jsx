import React from 'react';
import { projectExperienceData, workExperienceData } from './data/Data'; 
import './css/projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Work Experience</h2>
            <div className="experience-grid">
                {workExperienceData.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <h3>{exp.company}</h3>
                        <p><strong>Duration:</strong> {exp.duration}</p>
                        <p><strong>Role:</strong> {exp.role}</p>
                        {exp.client && <p><strong>Client:</strong> {exp.client}</p>}
                        {exp.project && <p><strong>Project:</strong> {exp.project}</p>}
                    </div>
                ))}
            </div>
            <h2>Project Experience</h2>
            <div className="projects-grid">
                {projectExperienceData.map((proj, index) => (
                    <div key={index} className="project-card">
                        <h3>{proj.project}</h3>
                        <p><strong>Company:</strong> {proj.company}</p>
                        <p><strong>Role:</strong> {proj.role}</p>
                        <p><strong>Description:</strong></p>
                        <p>{proj.description}</p>
                        <div className="tools-section">
                            {proj.tools.map((tool, idx) => (
                                <div key={idx} className="tool-card">
                                    <h4>{tool.type}</h4>
                                    <ul>
                                        {tool.items.map((item, id) => (
                                            <li key={id}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
