import React from 'react';
import { css } from '@emotion/react';
import { colors } from 'const/style/colors';
import { pxToRem } from 'utils/style/pxToRem';

function Header() {
  return (
    <header css={headerStyle}>
      <div className="left">왼쪽</div>
      <div className="middle">가운데</div>
      <div className="right">오른쪽</div>
    </header>
  );
}

const headerStyle = css`
  max-width: 100%;
  height: ${pxToRem(44)};
  border-bottom: 1px solid ${colors.gray[200]};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${pxToRem(20)};
  position: relative;

  .middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Header;
