import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Adjust the path to where index.css is located

const FavouritePage = ({ favourites, removeFromFavourites }) => {
  return (
    <div className="container">
      <div className="favourite-section">
        <h2>Favourite Students</h2>
        {favourites.length > 0 ? (
          <ul>
            {favourites.map((student, index) => (
              <li key={index} className="favourite-item">
                {student}
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavourites(student)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favourite students yet.</p>
        )}
      </div>
      <Link to="/">
        <button className="nav-btn">Go back to Students List</button>
      </Link>
    </div>
  );
};

export default FavouritePage;
