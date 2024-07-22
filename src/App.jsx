import React, { useState } from 'react';
import CourseList from './assets/CourseList/CourseList';
import CourseDetail from './assets/CourseDetail/CourseDetail';
import Quiz from './assets/Quiz/Quiz';
import ProgressTracker from './assets/ProgressTracker/ProgressTracker';
import InstructorTools from './assets/InstructorTools/InstructorTools';
import './App.css';
import Dashboard from './assets/Dashboard/Dashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('courseList');
  const [progress, setProgress] = useState({
    completedCourses: 5,
    quizzesTaken: 10,
    score: 85,
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'courseList':
        return <CourseList setCurrentPage={setCurrentPage} />;
      case 'courseDetail':
        return <CourseDetail />;
      case 'quiz':
        return <Quiz />;
      case 'progress':
        return <ProgressTracker progress={progress} />;
      case 'instructor':
        return <InstructorTools />;
      default:
        return <CourseList setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      <Dashboard setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
