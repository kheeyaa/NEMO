import React, { ReactElement } from 'react';
import { css } from '@emotion/react';
import { colors } from 'const/style/colors';
import { pxToRem } from 'utils/style/pxToRem';
import { MOBILE_WIDTH } from 'const/style/size';

interface HeaderProps {
  LeftContent?: ReactElement;
  MiddleContent?: ReactElement;
  RightContent?: ReactElement;
}

function Header({ LeftContent, MiddleContent, RightContent }: HeaderProps) {
  return (
    <header css={headerStyle}>
      <div className="left">{LeftContent}</div>
      <div className="middle">{MiddleContent}</div>
      <div className="right">{RightContent}</div>
    </header>
  );
}

const headerStyle = css`
  max-width: ${pxToRem(MOBILE_WIDTH)};
  width: 100%;
  height: ${pxToRem(44)};
  border-bottom: 1px solid ${colors.gray[200]};
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${pxToRem(20)};
  position: fixed;
  top: 0;
  background-color: white;

  .middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Header;
