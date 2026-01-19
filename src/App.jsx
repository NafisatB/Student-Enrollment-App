import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Courses from './Courses';
import EnrolledCourses from './EnrolledCourses';

export default function App() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (course) => {
    const isAlreadyEnrolled = enrolledCourses.some(c => c.id === course.id);
    if (!isAlreadyEnrolled) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const handleRemove = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(course => course.id !== courseId));
  };

  return (
    <Router>
      <div className="App">
        <Navbar enrolledCount={enrolledCourses.length} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/courses"
              element={
                <Courses
                  enrolledCourses={enrolledCourses}
                  onEnroll={handleEnroll}
                />
              }
            />
            <Route
              path="/enrolled"
              element={
                <EnrolledCourses
                  enrolledCourses={enrolledCourses}
                  onRemove={handleRemove}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
