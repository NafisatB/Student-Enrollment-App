import React from 'react';

export default function EnrolledCourses({ enrolledCourses, onRemove }) {
  if (enrolledCourses.length === 0) {
    return (
      <div className="enrolled-page">
        <h1>My Enrolled Courses</h1>
        <div className="empty-state">
          <p>No courses enrolled yet</p>
          <a href="/courses" className="btn btn-primary">Browse Courses</a>
        </div>
      </div>
    );
  }

  return (
    <div className="enrolled-page">
      <h1>My Enrolled Courses</h1>
      <p className="enrolled-count">You are enrolled in {enrolledCourses.length} course{enrolledCourses.length !== 1 ? 's' : ''}</p>
      <div className="enrolled-list">
        {enrolledCourses.map(course => (
          <div key={course.id} className="enrolled-card">
            <div className="enrolled-info">
              <div>
                <h3>{course.title}</h3>
                <span className="course-code">{course.code}</span>
              </div>
              <p className="course-description">{course.description}</p>
              <span className="course-instructor">👨‍🏫 {course.instructor}</span>
            </div>
            <button
              onClick={() => onRemove(course.id)}
              className="btn btn-danger"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
