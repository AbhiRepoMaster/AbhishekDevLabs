import React from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterComponent() {
    return (
        <div className="typewriter">
            <Typewriter
                options={{
                    strings: ['Front End Developer', 'Back End Developer', 'Full Stack Developer'],
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                    delay: 75,
                }}
            />
        </div>
    );
}

export default TypewriterComponent;
