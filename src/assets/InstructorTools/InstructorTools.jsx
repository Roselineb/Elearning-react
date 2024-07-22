import React, { useState } from 'react';
import './InstructorTools.css';

const InstructorTools = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleCreateCourse = () => {
    // Add course creation logic
    console.log('Course Created:', { title: courseTitle, description: courseDescription });
  };

  return (
    <div className="instructor-tools">
      <h2>Instructor Tools</h2>
      <input
        type="text"
        placeholder="Course Title"
        value={courseTitle}
        onChange={e => setCourseTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course Description"
        value={courseDescription}
        onChange={e => setCourseDescription(e.target.value)}
      />
      <button onClick={handleCreateCourse}>Create Course</button>
    </div>
  );
};

export default InstructorTools;
