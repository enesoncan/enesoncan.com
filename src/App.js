import React, { useState } from 'react';

import Home from './containers/Home';

import './general.scss';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? 'darkTheme' : 'lightTheme'}>
      <Home darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
