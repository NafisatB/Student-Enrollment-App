import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ enrolledCount }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Student Course Enrollment</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/enrolled">
          Enrolled {enrolledCount > 0 && <span className="badge">{enrolledCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
