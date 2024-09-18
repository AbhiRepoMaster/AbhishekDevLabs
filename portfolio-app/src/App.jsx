import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="certifications">
                <Certifications />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="education">
                <Education />
            </section>
        </div>
    );
}

export default App;
