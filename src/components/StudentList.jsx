import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Assuming you're styling the component here

const StudentPage = ({ favourites, addToFavourites }) => {
  // List of students to display
  const students = ['Vishal', 'Kishore', 'Akash', 'John', 'Justin'];

  return (
    <div className="container">
      <div className="student-section">
        <h2>List of Students</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index} className="student-item">
              {student}
              {/* Add to Favourite button */}
              
              <button
                className="add-btn"
                onClick={() => addToFavourites(student)}
                disabled={favourites.includes(student)} // Disable if already added
              >
                {favourites.includes(student) ? "Added"  : "Add to Favourite"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Link to go to the favourite students page */}
      <Link to="/favourites">
        <button className="nav-btn">Go to Favourite Students</button>
      </Link>
    </div>
  );
};

export default StudentPage;
