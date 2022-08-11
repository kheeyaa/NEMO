import { css } from '@emotion/react';
import Icon, { IconType } from 'components/common/Icon';
import React from 'react';

type IconButtonProps = {
  type: IconType;
  onClick?: () => void;
};

function IconButton({ type, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick} css={iconButtonStyle} type="button">
      <Icon type={type} />
    </button>
  );
}

const iconButtonStyle = css`
  background-color: transparent;
  border: none;
  padding: 0;
`;

export default IconButton;
