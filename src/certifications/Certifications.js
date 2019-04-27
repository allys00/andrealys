import React from 'react';
import CoursesData from './courses_data'

import './Certifications.css';
import CourseCard from './course-card/Course-card';

const Certifications = () => (
    <div className="certifications-container">
        <p className="title">
            Meus Cursos
        </p>
        <div className="courses">
            {CoursesData.map((course, index) => (
                <CourseCard {...course} key={index} />
            ))}
        </div>

    </div >
)
export default Certifications;