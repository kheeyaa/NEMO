import Header from 'components/BasicLayout/Header';
import React from 'react';

function Home() {
  const LeftContent = <div>왼쪽</div>;
  const MiddleContent = <div>가운데</div>;
  const RightContent = <div>오른쪽</div>;

  return (
    <>
      <Header
        LeftContent={LeftContent}
        MiddleContent={MiddleContent}
        RightContent={RightContent}
      />
      Home
    </>
  );
}

export default Home;
