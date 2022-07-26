import { css } from '@emotion/react';
import A11yHidden from 'components/common/A11yHidden';
import Icon from 'components/common/Icon';
import React from 'react';

interface MenuProps {
  onClick?: () => void;
}

function Menu({ onClick }: MenuProps) {
  return (
    <button css={buttonStyle} onClick={onClick}>
      <A11yHidden>메뉴</A11yHidden>
      <Icon type="Menu" />
    </button>
  );
}

const buttonStyle = css`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export default Menu;
