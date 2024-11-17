// Skills.js
import React from 'react';
import './skills.css'; // Ensure you have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faToolbox, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const skillsData = [
    {
        category: 'Languages',
        skills: [
            { name: 'C', icon: faCode },
            { name: 'C++', icon: faCode },
            { name: 'Python', icon: faCode },
            { name: 'Java', icon: faCode },
            { name: 'JavaScript', icon: faCode },
            { name: 'HTML', icon: faCode },
            { name: 'CSS', icon: faCode },
            { name: 'Swift', icon: faCode },
            { name: 'Bash', icon: faCode },
            { name: 'Assembly', icon: faCode },
        ],
    },
    {
        category: 'Frameworks',
        skills: [
            { name: 'React', icon: faLaptopCode },
            { name: 'Node.js', icon: faLaptopCode },
            { name: 'AngularJS', icon: faLaptopCode },
            { name: 'APIs', icon: faLaptopCode },
            { name: 'PowerShell', icon: faLaptopCode },
            { name: 'SwiftUI', icon: faLaptopCode },
        ],
    },
    {
        category: 'Developer Tools',
        skills: [
            { name: 'Git', icon: faToolbox },
            { name: 'GitHub', icon: faToolbox },
            { name: 'Visual Studio Code', icon: faToolbox },
            { name: 'IntelliJ', icon: faToolbox },
            { name: 'Vim', icon: faToolbox },
            { name: 'XCode', icon: faToolbox },
            { name: 'Azure', icon: faToolbox },
            { name: 'Eclipse', icon: faToolbox },
            { name: 'Linux', icon: faToolbox },
            { name: 'Terminal', icon: faToolbox },
            { name: 'MARS Assembler', icon: faToolbox },
        ],
    },
];

function Skills() {
    return (
        <section id="skills">
            <h2 className="skillsTitle">Technical Skills</h2>
            <div className="skillsContainer"> {/* Container for columns */}
                {skillsData.map((category, index) => (
                    <div key={index} className="skillsColumn"> {/* Column for each category */}
                        <h3>{category.category}</h3>
                        <ul>
                            {category.skills.map((skill, idx) => (
                                <li key={idx} className="skillItem">
                                    <FontAwesomeIcon icon={skill.icon} className="skillIcon" />
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
