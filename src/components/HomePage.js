// HomePage.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import SettingsPage from './CRUDapp';
import './HomePage.css';
import LoadingScreen from './LoadingScreen'; 

const HomePage = () => {
  const [settingsLoading, setSettingsLoading] = useState(false);
  const simulateSettingsLoading = () => {
    setSettingsLoading(true);
    setTimeout(() => {
      setSettingsLoading(false);
    }, 2000); 
  };
 

  return (
    <Router>
      <div className="HomePage">
        <div className="fixed-header">
          <nav>
            <div className="Header-buttons">
              <button >
                <Link to="/">Home</Link>
              </button>
              <button onClick={simulateSettingsLoading}>
                <Link to="/settings">Settings</Link>
              </button>
            </div>
          </nav>
        </div>

        <div className="main-content">
          {/* Display the LoadingScreen component when settingsLoading state is true */}
          {settingsLoading ? (
            <LoadingScreen />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
