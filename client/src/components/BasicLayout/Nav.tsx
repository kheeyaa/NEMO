import React from 'react';
import { css } from '@emotion/react';
import { colors } from 'const/style/colors';
import { MOBILE_WIDTH } from 'const/style/size';
import { Link, useLocation } from 'react-router-dom';
import { pxToRem } from 'utils/style/pxToRem';

const navigators = [
  {
    to: '/',
    text: '홈',
  },
  {
    to: '/trends',
    text: '인기 상승',
  },
  {
    to: '/draw-edit',
    text: '그림 그리기',
  },
  {
    to: '/my-store',
    text: '마이 페이지',
  },
];

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav css={navStyle}>
      <ul>
        {navigators.map(({ to, text }) => (
          <li key={to} className={pathname === to ? 'active' : ''}>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const navStyle = css`
  max-width: ${MOBILE_WIDTH};
  width: 100%;
  height: ${pxToRem(64)};
  border-top: 1px solid ${colors.gray[200]};
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  background-color: white;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  li {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    background-color: ${colors.yellow[100]};
  }
`;

export default Nav;
