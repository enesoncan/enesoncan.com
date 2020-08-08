import React from 'react';
import Header from '../components/Header';
import Container from '../components/Layout/Container';
import Main from '../components/Main';
import Social from '../components/Social';

const Home = ({ darkTheme, toggleTheme }) => {
  return (
    <>
      <Container>
        <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Container>
      <Container>
        <Main />
      </Container>
      <Container>
        <Social />
      </Container>
    </>
  );
};

export default Home;
