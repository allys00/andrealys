
import React, { Fragment } from 'react';
import './Course-card.css';

const CourseCard = ({ img }) => (
    <div className="course-card"  >
        <div className="img-certificate" style={{ backgroundImage: `url(${img})` }}>

        </div>
    </div >
)

export default CourseCard;