import React from 'react';
import Nav from 'components/BasicLayout/Nav';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import { MOBILE_WIDTH } from 'const/style/size';
import { pxToRem } from 'utils/style/pxToRem';

function BasicLayout() {
  return (
    <div css={basicLayoutStyle}>
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
  margin-top: ${pxToRem(44)};
  margin-bottom: ${pxToRem(64)};

  main {
    height: 300vh;
  }
`;

export default BasicLayout;
