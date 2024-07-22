import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';


const courses = [
  { id: 1, title: 'React Basics', description: 'Learn the basics of React.' },
  { id: 2, title: 'Advanced React', description: 'Dive deeper into React.' },

];

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(course => course.id === parseInt(courseId, 10));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      {/* Add more course details here */}
    </div>
  );
};

export default CourseDetail;
