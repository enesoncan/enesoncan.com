import React from 'react';
import Header from '../components/Header';
import Container from '../components/Layout/Container';

const Home = ({ darkTheme, toggleTheme }) => {
  return (
    <Container>
      <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />

      <h1>Merhaba, ben Enes.</h1>
      <p>Cimri.com'da Front-End Developer olarak çalışıyorum.</p>
    </Container>
  );
};

export default Home;
