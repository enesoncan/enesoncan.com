import React from 'react';

import Moon from '../Icons/Moon';
import Sun from '../Icons/Sun';
import './styles.scss';

const SwitchButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="switch">
      {!darkTheme && (
        <button onClick={toggleTheme}>
          <Moon />
        </button>
      )}
      {darkTheme && (
        <button onClick={toggleTheme}>
          <Sun />
        </button>
      )}
    </div>
  );
};

export default SwitchButton;
