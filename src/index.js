import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional global styles
import App from './App'; // Importing App component

// Render the App component inside the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
