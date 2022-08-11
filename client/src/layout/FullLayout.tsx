import React from 'react';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import { MOBILE_WIDTH } from 'const/style/size';
import { pxToRem } from 'utils/style/pxToRem';

function FullLayout() {
  return (
    <div css={fullLayoutStyle}>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const fullLayoutStyle = css`
  box-sizing: border-box;
  max-width: ${pxToRem(MOBILE_WIDTH)};
  min-height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export default FullLayout;
