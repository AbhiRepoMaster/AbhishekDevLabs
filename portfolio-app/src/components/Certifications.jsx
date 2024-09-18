import React from 'react';
import { certificationsData, papersData } from './data/data';
import './css/certifications.css';

const Certifications = () => {
    return (
        <div className="certifications-container">
            <h2>Certifications</h2>
            <div className="timeline">
                {certificationsData.map((cert, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-content">
                            <h3>{cert.title}</h3>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-link">
                                Certification Link
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Papers & Publications</h2>
            <div className="timeline">
                {papersData.map((paper, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-content">
                            <h3>
                                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="paper-link">
                                    {paper.title}
                                </a>
                            </h3>
                            {paper.journal && <p className="journal">{paper.journal}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
