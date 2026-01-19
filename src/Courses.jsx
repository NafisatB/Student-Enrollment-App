import React from 'react';
import CourseCard from './CourseCard';

const availableCourses = [
    {
        id: 1,
        code: 'CS101',
        title: 'Introduction to Programming',
        description: 'Learn the fundamentals of programming using Python',
        instructor: 'Dr. Sarah Johnson'
    },
    {
        id: 2,
        code: 'WEB201',
        title: 'Web Development Fundamentals',
        description: 'Master HTML, CSS, and JavaScript to build modern websites',
        instructor: 'Prof. Michael Chen'
    },
    {
        id: 3,
        code: 'DATA301',
        title: 'Data Structures & Algorithms',
        description: 'Deep dive into efficient data structures and algorithmic thinking',
        instructor: 'Dr. Emily Rodriguez'
    },
    {
        id: 4,
        code: 'REACT401',
        title: 'Advanced React Development',
        description: 'Build complex applications with React, hooks, and state management',
        instructor: 'Prof. David Kim'
    },
    {
        id: 5,
        code: 'DB501',
        title: 'Database Design & Management',
        description: 'Learn SQL, database design principles, and optimization techniques',
        instructor: 'Dr. Amanda Wilson'
    },

    {
        id: 6,
        code: 'CHM304',
        title: 'Physical Chemistry',
        description: 'Covers thermodynamics, chemical kinetics, quantum chemistry, and the physical principles governing chemical systems',
        instructor: 'Dr. Ibrahim Adeyemi'
    }
];

export default function Courses({ enrolledCourses, onEnroll }) {
    const isEnrolled = (courseId) => {
        return enrolledCourses.some(course => course.id === courseId);
    };

    return (
        <div className="courses-page">
            <h1>Available Courses</h1>
            <div className="courses-grid">
                {availableCourses.map(course => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onEnroll={onEnroll}
                        isEnrolled={isEnrolled(course.id)}
                    />
                ))}
            </div>
        </div>
    );
}
