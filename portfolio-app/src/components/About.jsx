import React, { useState, useEffect } from 'react';
import { aboutData } from './Data/data';
import TypewriterComponent from './TypewriterComponent';
import './css/About.css';

const About = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showGreeting, setShowGreeting] = useState(true);
    const [showFullIntro, setShowFullIntro] = useState(false);

    // Determine greeting based on the time of day
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 18) return "Good afternoon";
        return "Good evening";
    };

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowGreeting(false);
            setShowFullIntro(true);
        }, 3000); // Adjust timing as needed

        return () => clearTimeout(timer1);
    }, []);

    const handleButtonClick = () => {
        window.open('https://www.google.com', '_blank');
    };

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className="about-container">
            {showGreeting && (
                <h2 className="intro-name">
                    {getGreeting()}! 😊
                </h2>
            )}
            {showFullIntro && (
                <>
                    <h2 className="intro-name">Hi, I am</h2>
                    <h2 className="intro-name">{aboutData.name}</h2>
                    <p className="typewriter-wrapper">
                        <span className="intro-text">I am a</span>
                        <span className="spacing"></span>
                        <span className="typewriter-text">
                            <TypewriterComponent />
                        </span>
                    </p>
                </>
            )}
            <p className="about-introduction">
                {aboutData.introduction}
            </p>
            <div
                className="button-container"
                onMouseMove={handleMouseMove}
            >
                <button className="primary-button" onClick={handleButtonClick}>
                    Check Resume
                </button>
               
            </div>
        </div>
    );
};

export default About;
