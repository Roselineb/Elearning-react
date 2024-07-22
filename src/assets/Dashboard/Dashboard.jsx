import React from 'react';
import './Dashboard.css'
import { NavLink } from 'react-router-dom';
const Dashboard =({ setCurrentPage }) =>{
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={() => setCurrentPage('courseList')} className="nav-button">
            Course List
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage('courseDetail')} className="nav-button">
            Course Detail
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage('quiz')} className="nav-button">
            Quiz
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage('instructor')} className="nav-button">
            Instructor Tools
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage('progress')} className="nav-button">
            Progress Tracker
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard