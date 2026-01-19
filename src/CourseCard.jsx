import React from 'react';

export default function CourseCard({ course, onEnroll, isEnrolled }) {
  return (
    <div className="course-card">
      <div className="course-header">
        <h3>{course.title}</h3>
        <span className="course-code">{course.code}</span>
      </div>
      <p className="course-description">{course.description}</p>
      <div className="course-footer">
        <span className="course-instructor">👨‍🏫 {course.instructor}</span>
        <button
          onClick={() => onEnroll(course)}
          disabled={isEnrolled}
          className={`btn ${isEnrolled ? 'btn-disabled' : 'btn-primary'}`}
        >
          {isEnrolled ? 'Enrolled ✓' : 'Enroll'}
        </button>
      </div>
    </div>
  );
}
