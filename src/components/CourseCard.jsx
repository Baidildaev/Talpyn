import React from 'react';
import { Link } from 'react-router-dom'; // ДОБАВЛЯЕМ импорт Link
import './CourseCard.css';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img 
        src={course.image ? course.image : "https://via.placeholder.com/150"} 
        alt="Course" 
        className="course-image" 
      />
      <h3 className="course-title">{course.title}</h3>
      <p className="course-price">{course.price}</p>
      <p className="course-description">{course.description}</p>

      {/* ОБЕРНУЛИ кнопку в Link */}
      <Link to="/lessons">
        <button className="start-button">Начать урок</button>
      </Link>
    </div>
  );
}

export default CourseCard;
