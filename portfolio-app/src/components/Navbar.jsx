// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import './css/Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="certifications" smooth={true} duration={500}>Certifications</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
            </ul>
            <button className="outline-button">Github Profile</button>
        </nav>
    );
};

export default Navbar;
