import React from 'react';
import Header from 'components/BasicLayout/Header';
import Nav from 'components/BasicLayout/Nav';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import { MOBILE_WIDTH } from 'const/style/size';

function BasicLayout() {
  return (
    <div css={basicLayoutStyle}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Nav />
    </div>
  );
}

const basicLayoutStyle = css`
  max-width: ${MOBILE_WIDTH};
  min-height: 100vh;
  background-color: white;
  margin: 0 auto;
`;

export default BasicLayout;
