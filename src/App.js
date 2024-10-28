import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavouritePage from './components/FavouritePage';
import StudentPage from './components/StudentPage'
const App = () => {
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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <StudentPage favourites={favourites} addToFavourites={addToFavourites} />
          }
        />
        <Route
          path="/favourites"
          element={
            <FavouritePage
              favourites={favourites}
              removeFromFavourites={removeFromFavourites}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
