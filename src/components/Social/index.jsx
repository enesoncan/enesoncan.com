import React from 'react';
import './styles.scss';

const Social = () => {
  return (
    <div className="social-wrapper">
      <a href="mailto:enesoncn@gmail.com">
        <i className="fas fa-envelope"></i>
      </a>
      <a
        className="linkedin"
        href="https://www.linkedin.com/in/enesoncan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/enesoncan/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://medium.com/@enesoncn" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-medium"></i>
      </a>
      <a href="https://codepen.io/enesoncan" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-codepen"></i>
      </a>
      <a href="https://www.instagram.com/enes.oncn/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
