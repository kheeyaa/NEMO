import { css } from '@emotion/react';
import A11yHidden from 'components/common/A11yHidden';
import { colors } from 'const/style/colors';
import React, { ReactElement } from 'react';
import { pxToRem } from 'utils/style/pxToRem';

export type ButtonProps = {
  name: string;
  onClick: () => void;
  children: ReactElement;
};

function Button({ name, onClick, children }: ButtonProps) {
  return (
    <button css={buttonStyle} onClick={onClick}>
      {children}
      <A11yHidden>{name}</A11yHidden>
    </button>
  );
}

const buttonStyle = css`
  width: 100%;
  height: ${pxToRem(77)};
  background-color: transparent;
  border: none;
  transition: background-color 0.2s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.gray[100]};
  }
`;

export default Button;
