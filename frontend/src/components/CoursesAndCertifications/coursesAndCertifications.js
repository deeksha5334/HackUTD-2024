// coursesAndCertifications.js
import React from 'react';
import './coursesAndCertifications.css';

const courses = [
    "Computer Science I",
    "Computer Science II",
    "Probability and Statistics in Computer Science and Software Engineering",
    "Data Structures and Introduction to Algorithmic Analysis",
    "System Programming in UNIX and Other Environments",
    "Computer Architecture",
    "Introduction to Computer Science and Software Engineering",
    "Discrete Mathematics"
];

const certifications = [
    { name: "Career Essentials in Generative AI by Microsoft and LinkedIn", issued: "Issued June 2024" },
    { name: "Career Essentials in Software Engineering by Microsoft and LinkedIn", issued: "Issued June 2024" },
    { name: "Introduction to IT Automation", issued: "Issued June 2024" }
];

function CoursesAndCertifications() {
    return (
        <section id="coursesAndCertifications">
            <h2 className="sectionTitle">Courses and Certifications</h2>
            <div className="contentContainer">
                <div className="coursesContainer">
                    <h3>Courses</h3>
                    <ul>
                        {courses.map((course, index) => (
                            <li key={index} className="courseItem">{course}</li>
                        ))}
                    </ul>
                </div>
                <div className="certificationsContainer">
                    <h3>Certifications</h3>
                    <ul>
                        {certifications.map((cert, index) => (
                            <li key={index} className="certificationItem">
                                <span className="certificationName">{cert.name}</span>
                                <span className="certificationIssued">{cert.issued}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default CoursesAndCertifications;
