import React, { useState } from "react";
import './index.css'; // Importing the CSS file

const StudentList = () => {
  // List of students
  const students = ["Bharath", "Praveen", "Kumar", "Ramya", "Monica"];

  // State to keep track of favourite students
  const [favourites, setFavourites] = useState([]);

  // Function to add a student to favourites
  const addToFavourites = (student) => {
    if (!favourites.includes(student)) {
      setFavourites([...favourites, student]);
    }
  };

  // Function to remove a student from favourites
  const removeFromFavourites = (student) => {
    setFavourites(favourites.filter((fav) => fav !== student));
  };

  return (
    <div className="container">
      <div className="student-section">
        <h2>List of Students</h2>
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

      <div className="favourite-section">
        <h2>Favourite Students</h2>
        {favourites.length > 0 ? (
          <ul>
            {favourites.map((student, index) => (
              <li key={index} className="favourite-item">
                {student}
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavourites(student)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favourite students yet.</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
