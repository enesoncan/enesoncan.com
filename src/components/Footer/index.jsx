import React from 'react';

import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <span className="content">{`Copyright © ${new Date().getFullYear()}`}</span>
    </footer>
  );
};

export default Footer;
