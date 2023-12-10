// LoadingScreen.js
import React from 'react';
import './LoadingScreen.css'; 

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
