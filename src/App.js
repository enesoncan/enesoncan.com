import React, { useState, useEffect } from 'react';
import Home from './containers/Home';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    let value = localStorage.getItem('dark-mode-enabled');
    if (value === null) {
      setDarkTheme(false);
      window.localStorage.setItem('dark-mode-enabled', false);
      document.getElementsByTagName('html')[0].removeAttribute('dark-mode');
    } else if (value === 'true') {
      setDarkTheme(true);
      document.getElementsByTagName('body')[0].setAttribute('dark-mode', true);
    } else {
      setDarkTheme(false);
      document.getElementsByTagName('body')[0].removeAttribute('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (localStorage.getItem('dark-mode-enabled') == 'false') {
      setDarkTheme(true);
      window.localStorage.setItem('dark-mode-enabled', true);
      document.getElementsByTagName('body')[0].setAttribute('dark-mode', true);
    } else {
      setDarkTheme(false);
      window.localStorage.setItem('dark-mode-enabled', false);
      document.getElementsByTagName('body')[0].removeAttribute('dark-mode');
    }
  };

  return <Home darkTheme={darkTheme} toggleTheme={toggleTheme} />;
}

export default App;
