import Header from 'components/BasicLayout/Header';
import Logo from 'components/BasicLayout/HeaderItems/Logo';
import React from 'react';

function Home() {
  return (
    <>
      <Header MiddleContent={<Logo />} />
      Home
    </>
  );
}

export default Home;
