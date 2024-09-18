import React from 'react';
import { skillsData } from './data/data';   
import './css/skills.css'; 

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="timeline">
                {skillsData.map((skill, skillIndex) => (
                    <div key={skill.category} className="timeline-item">
                        <div className="timeline-content">
                            <h3>{skill.category}</h3>
                            <div className="skill-items-container">
                                {skill.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="skill-item-card">
                                        {item.type && <h4>{item.type}</h4>}
                                        <div className="tools-grid">
                                            {item.tools.map((tool, toolIndex) => (
                                                <div key={toolIndex} className="tool-tile">{tool}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="timeline-marker"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
