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
  box-sizing: border-box;
  max-width: ${pxToRem(MOBILE_WIDTH)};
  min-height: 100vh;
  margin: 0 auto;
  padding-top: ${pxToRem(44)};
  padding-bottom: ${pxToRem(64)};
  background-color: white;
`;

export default BasicLayout;
