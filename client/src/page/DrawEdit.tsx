import { css } from '@emotion/react';
import Header from 'components/BasicLayout/Header';
import GoToBack from 'components/BasicLayout/HeaderItems/GoToBack';
import Menu from 'components/BasicLayout/HeaderItems/Menu';
import EditNav from 'components/DrawEdit/Nav/EditNav';
import Editor from 'components/DrawEdit/Editor';
import React from 'react';
import { pxToRem } from 'utils/style/pxToRem';
import LineRange from 'components/DrawEdit/LineRange';

function DrawEdit() {
  return (
    <div css={drawEditStyle}>
      <Header LeftContent={<GoToBack />} RightContent={<Menu />} />
      <Editor />
      <LineRange />
      <EditNav />
    </div>
  );
}

const drawEditStyle = css`
  padding-top: ${pxToRem(44)};
  padding-bottom: ${pxToRem(77 * 2)};
  box-sizing: border-box;
  height: 100vh;
`;

export default DrawEdit;
