// App.js
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
