'use client'

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Container from '../components/Layout/Container';
import Content from '../components/Content';
import Social from '../components/Social';
import Footer from '../components/Footer';

const Main = () => {
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

  return (
    <>
      <Container>
        <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Container>
      <Container>
        <Content />
      </Container>
      <Container>
        <Social />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
