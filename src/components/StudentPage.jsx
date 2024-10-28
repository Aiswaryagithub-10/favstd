import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Assuming you use the same CSS for both pages

const StudentPage = ({ favourites, addToFavourites }) => {
  const students = ['Vishal', 'Kishore', 'Akash', 'John', 'Justin'];

  return (
    <div className="container">
      <div className="student-section">
        <h2 className='head'>List of Students</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index} className="student-item">
              {student}
              <button
                className="add-btn"
                onClick={() => addToFavourites(student)}
              >
                Add to Favourite
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/favourites">
        <button className="nav-btn">Go to Favourite Students</button>
      </Link>
    </div>
  );
};

export default StudentPage;
