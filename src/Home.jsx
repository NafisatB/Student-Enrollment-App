import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Student Course Enrollment System</h1>
        <p>Discover and enroll in courses to enhance your skills</p>
        <div className="hero-buttons">
          <Link to="/courses" className="btn btn-primary">
            Browse Courses
          </Link>
          <Link to="/enrolled" className="btn btn-secondary">
            My Enrolled Courses
          </Link>
        </div>
      </div>
      <div className="features">
        <div className="feature-card">
          <h3> Wide Selection</h3>
          <p>Choose from various courses across different domains</p>
        </div>
        <div className="feature-card">
          <h3> Expert Instructors</h3>
          <p>Learn from industry professionals</p>
        </div>
        <div className="feature-card">
          <h3> Instant Enrollment</h3>
          <p>Enroll in courses with a single click</p>
        </div>
      </div>
    </div>
  );
}
