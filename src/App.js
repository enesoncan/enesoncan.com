import React, { useState, useEffect } from 'react';
import Home from './containers/Home';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    let value = localStorage.getItem('dark-mode-enabled');
    if (value === null) {
      setDarkTheme(false);
      window.localStorage.setItem('dark-mode-enabled', false);
    } else if (value === 'true') {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  const toggleTheme = () => {
    if (localStorage.getItem('dark-mode-enabled') == 'false') {
      setDarkTheme(true);
      window.localStorage.setItem('dark-mode-enabled', true);
    } else {
      setDarkTheme(false);
      window.localStorage.setItem('dark-mode-enabled', false);
    }
  };

  return (
    <div
      className={localStorage.getItem('dark-mode-enabled') === 'true' ? 'darkTheme' : 'lightTheme'}
    >
      <Home darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
