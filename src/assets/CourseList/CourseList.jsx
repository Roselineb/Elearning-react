import React from 'react';
import './CourseList.css';

const courses = [
    { id: 1, title: 'JavaScript Fundamentals', description: 'Introduction to basic JavaScript concepts.' },
    { id: 2, title: 'React Hooks', description: 'Learn how to use React hooks for state management.' },
    { id: 3, title: 'Node.js Backend Development', description: 'Building backend APIs with Node.js and Express.' },
    { id: 4, title: 'HTML5 and CSS3 Essentials', description: 'Fundamentals of modern web development technologies.' },
    { id: 5, title: 'Python Programming', description: 'Comprehensive guide to Python programming language.' },
    { id: 6, title: 'Data Structures and Algorithms', description: 'Study of fundamental data structures and algorithms.' },
    { id: 7, title: 'Machine Learning Basics', description: 'Introduction to machine learning concepts and algorithms.' },
    { id: 8, title: 'iOS App Development with Swift', description: 'Building mobile applications for iOS using Swift.' },
    { id: 9, title: 'Angular Framework', description: 'Deep dive into Angular framework for building web applications.' },
    { id: 10, title: 'Database Design and SQL', description: 'Fundamentals of relational database design and SQL queries.' },
    { id: 11, title: 'UI/UX Design Principles', description: 'Introduction to user interface and user experience design.' },
    { id: 12, title: 'Cybersecurity Fundamentals', description: 'Essential concepts and practices in cybersecurity.' },
    { id: 13, title: 'Responsive Web Design', description: 'Designing websites that adapt to various screen sizes.' },
    { id: 14, title: 'AWS Cloud Computing', description: 'Introduction to cloud computing using Amazon Web Services (AWS).' },
    { id: 15, title: 'Java Programming', description: 'Core concepts and applications of the Java programming language.' },
    { id: 16, title: 'Blockchain Technology', description: 'Overview of blockchain technology and its applications.' },
    { id: 17, title: 'Software Testing and Quality Assurance', description: 'Principles and techniques of software testing.' },
    { id: 18, title: 'Flutter App Development', description: 'Building cross-platform mobile applications with Flutter.' },
    { id: 19, title: 'Next.js Basics', description: 'Learn the basics of Next.js for server-side rendering.' },
    { id: 20, title: 'Vue.js Framework', description: 'Introduction to Vue.js for building interactive web interfaces.' }
  // Add more courses as needed
];

const CourseList = ({ setCurrentPage }) => {
  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id} className="course-item">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={() => setCurrentPage('courseDetail')}>View Course</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
