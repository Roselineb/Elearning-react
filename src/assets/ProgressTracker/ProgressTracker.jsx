import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ progress }) => {
  return (
    <div className="progress-tracker">
    <h2>Your Progress</h2>
    <div className="progress-item">
      <label>Courses Completed:</label>
      <span>{progress.completedCourses}</span>
    </div>
    <div className="progress-item">
      <label>Quizzes Taken:</label>
      <span>{progress.quizzesTaken}</span>
    </div>
    <div className="progress-item">
      <label>Overall Score:</label>
      <span>{progress.score}</span>
    </div>
  </div>
  );
};

export default ProgressTracker;
