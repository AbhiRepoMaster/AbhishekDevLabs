// src/data.js

// Education Data
export const educationData = [
    {
        institution: "DIT University",
        duration: "Sep 2020 – Aug 2022",
        degree: "M. Tech in Computer Science and Engineering (CS-IT)"
    },
    {
        institution: "GLA University",
        duration: "Aug 2016 – Jun 2020",
        degree: "B. Tech in Computer Science and Engineering"
    }
];

// Certifications Data
export const certificationsData = [
    {
        title: "INTRODUCTION TO PROGRAMMING USING JAVA",
        link: "http://verify.certiport.com/v4NG-DwQv"
    },
    {
        title: "JAVA MASTERCLASS HAND ON 50 HOURS A TO Z JAVA ONLINE COURSE",
        link: "http://ude.my/UC-08R4CWGT"
    },
    {
        title: "COMPLETE PYTHON 3 COURSE: BEGINNER TO ADVANCED ONLINE COURSE",
        link: "http://ude.my/UC-E375EWTI"
    }
];

// Papers & Publications Data
export const papersData = [
    {
        title: "A WEIGHTED ENSEMBLE MODEL FOR PREDICTION OF DENGUE INCIDENCES IN NORTH INDIA",
        journal: "IJAECS Journal",
        link: "https://ijaecs.iraj.in/paper_detail.php?paper%20id=18684"
    },
    {
        title: "KIDNEY STONE DETECTION SYSTEM",
        link: "http://testmagzine.biz/index.php/testmagzine/article/view/4415"
    }
];

// Projects Data
// src/components/Data/Data.jsx

export const workExperienceData = [
    {
        company: "Hinduja Tech",
        duration: "Sept 2022 – Present",
        role: "Java Developer",
        client: "Hyundai Auto-ever, Gurgaon"
    },
    {
        company: "HPE India (Internship)",
        duration: "June 2018 to Aug 2018",
        role: "Android app developer",
        project: "Garbage collection app"
    }
];

export const projectExperienceData = [
    {
        project: "DMS",
        company: "Hyundai Autoever, Gurgaon",
        role: "Java Developer",
        description: `Improved code quality of the repositories in Stack and GITLAB.
            Led a development team.
            Monitored and resolved batch issues.
            Developed and enhanced DMS to Salesforce batch processes and triggers.
            Designed and maintained database queries.
            Optimized SQL queries for performance.
            Contributed to application development and maintenance as a Developer.
            Assisted team members with technical challenges and ensured adherence to delivery schedules.
            Motivated and mentored team members.`,
        tools: [
            { type: "Programming Languages", items: ["Java 8"] },
            { type: "Frameworks", items: ["Spring 3.1.4", "Hibernate 3.5.4"] },
            { type: "IDE", items: ["STS (Spring Tool Suite)", "Visual Studio"] },
            { type: "Database", items: ["Tibero-6"] },
            { type: "Software Testing", items: ["Jennifer"] },
            { type: "SSH Client", items: ["Putty"] },
            { type: "Version Control", items: ["Git"] }
        ]
    },
    {
        project: "Visitors Connect",
        company: "Hinduja Tech Ltd.",
        role: "Java Developer",
        description: `Visitors Connect is a web app optimized for visitor data and appointment management.
            It efficiently tracks visitor details, their purpose, and scheduled meetings, simplifying
            appointment scheduling and ensuring secure visitor management for businesses and institutions.`,
        tools: [
            { type: "IDE", items: ["STS (Spring Tool Suite)"] },
            { type: "Database Management", items: ["MySQL Workbench"] }
        ]
    },
    {
        project: "Meeting Room Booking Application",
        company: "Hinduja Tech Ltd.",
        role: "React Developer",
        description: `Designed and developed the user interface (UI) for a Meeting Room Booking Application
            using React.js, creating a seamless and user-friendly experience. Integrated the UI
            with the server-side using Django with Python.`,
        tools: [
            { type: "Programming Languages", items: ["Html5", "CSS", "JavaScript", "React.js"] },
            { type: "IDE", items: ["Visual Studio Code"] },
            { type: "Version Control", items: ["Git"] }
        ]
    },
    {
        project: "Albonior website project",
        company: "Albonior",
        role: "Developer and Tester",
        description: `Improve website functionality by incorporating additional Information and restricting
            access to a specific audience. Enhancements will focus on the Home page, introducing
            upgrades and new features related to the customer base, supplier partners, and investor details.`,
        tools: [
            { type: "IDE", items: ["WordPress", "VS Code", "Xamp", "PHP", "React"] }
        ]
    },
    {
        project: "EzyID Project",
        company: "EZYiD",
        role: "React Developer",
        description: `EzyID is a cutting-edge platform designed to improve frontline operations by enhancing
            record keeping, mobilizing inspections, and dispatching resources efficiently. As a React
            Developer, I played a pivotal role in upgrading and enhancing the platform’s interface
            and functionality.`,
        tools: [
            { type: "IDE", items: ["VS Code"] },
            { type: "Programming Languages", items: ["Reactjs", "JS", "MVC"] }
        ]
    }
];


// Skills Data
export const skillsData = [
    {
        category: "Languages",
        items: [
            { type: "Proficient", tools: ["Java", "C++"] },
            { type: "Working Knowledge", tools: ["SQL", "JavaScript"] }
        ]
    },
    {
        category: "Frameworks & Libraries",
        items: [
            { type: "Backend", tools: ["Spring Boot", "Spring MVC", "Hibernate", "Microservices", "Kafka"] },
            { type: "Frontend", tools: ["React.js", "Angular", "JSP", "Tailwind CSS", "Bootstrap", "Kendo UI"] }
        ]
    },
    {
        category: "Web Development",
        items: [
            { type: "Technologies", tools: ["HTML5", "CSS3", "JavaScript", "jQuery", "Ajax"] },
            { type: "Tools", tools: ["Swagger", "JSON/JWT Validation", "OAuth", "Postman"] }
        ]
    },
    {
        category: "Database Management",
        items: [
            { type: "SQL Databases", tools: ["MySQL", "PostgreSQL"] },
            { type: "NoSQL Databases", tools: ["MongoDB"] }
        ]
    },
    {
        category: "DevOps & Tools",
        items: [
            { type: "Version Control", tools: ["Git", "SVN"] },
            { type: "Containers & Orchestration", tools: ["Docker", "Kubernetes"] },
            { type: "Servers & Deployment", tools: ["Apache Server", "PuTTY"] },
            { type: "IDEs", tools: ["Eclipse", "VS Code", "STS", "PgAdmin"] }
        ]
    },
    {
        category: "Soft Skills",
        items: [
            { type: "", tools: ["Communication", "Analytical Thinking", "Team Collaboration", "Leadership"] }
        ]
    }
];

// About Data
export const aboutData = {
    name: "Abhishek Kumar Singh",
    introduction: "A motivated and versatile software developer with a passion for coding and learning. I specialize in full-stack development, with hands-on experience in Java, Spring Boot, React.js, and various other technologies. I am eager to contribute my skills to innovative projects and grow within a dynamic team.",
    typewriterStrings: ['Front End Developer', 'Back End Developer', 'Full Stack Developer']
};
