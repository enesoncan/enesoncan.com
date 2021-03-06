import React from 'react';

import SwitchButton from '../SwitchButton';

import './styles.scss';

const Header = ({ darkTheme, toggleTheme }) => {
  return (
    <header className="header-wrapper">
      <a href="/" className="logo link heading">
        enesoncan
      </a>
      <SwitchButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;
