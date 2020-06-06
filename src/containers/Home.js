import React from 'react';
import Header from '../components/Header';
import Container from '../components/Layout/Container';

const Home = ({ darkTheme, toggleTheme }) => {
  return (
    <>
      <Container>
        <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Container>
      <Container>
        <h1 className="title">Merhaba, ben Enes.</h1>
        <p className="content">Cimri.com'da Front-End Developer olarak çalışıyorum.</p>
      </Container>
    </>
  );
};

export default Home;
