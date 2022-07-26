import React, { ReactElement } from 'react';
import { css } from '@emotion/react';
import { colors } from 'const/style/colors';
import { MOBILE_WIDTH } from 'const/style/size';
import { Link, useLocation } from 'react-router-dom';
import { pxToRem } from 'utils/style/pxToRem';
import Icon from 'components/common/Icon';
import A11yHidden from 'components/common/A11yHidden';

interface Navigator {
  to: string;
  text: string;
  icon: ReactElement;
}

const navigators: Navigator[] = [
  {
    to: '/',
    text: '홈',
    icon: <Icon type="Home" />,
  },
  {
    to: '/trends',
    text: '인기 상승',
    icon: <Icon type="Trends" />,
  },
  {
    to: '/draw-edit',
    text: '그림 그리기',
    icon: <Icon type="PaintBrush" />,
  },
  {
    to: '/my-store',
    text: '마이 페이지',
    icon: <Icon type="Profile" />,
  },
];

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav css={navStyle}>
      <ul>
        {navigators.map(({ to, text, icon }) => (
          <li key={to} className={pathname === to ? 'active' : ''}>
            <Link to={to}>
              <A11yHidden>{text}</A11yHidden>
              {icon}
            </Link>
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
