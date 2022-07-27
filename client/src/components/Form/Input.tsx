import { css } from '@emotion/react';
import A11yHidden from 'components/common/A11yHidden';
import { colors } from 'const/style/colors';
import React, { forwardRef } from 'react';
import { pxToRem } from 'utils/style/pxToRem';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width: string;
  inputName: string;
  inputId: string;
  placeholder?: string;
  type?: string;
}

type Ref = HTMLInputElement;

// forwardRef type:  https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/
const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const {
    width,
    inputName,
    inputId,
    placeholder,
    type = 'text',
    ...restProps
  } = props;

  return (
    <>
      <A11yHidden as="div">
        <label htmlFor={inputId}>{inputName}</label>
      </A11yHidden>
      <input
        css={inputStyle(width)}
        type={type}
        placeholder={placeholder}
        name={inputId}
        id={inputId}
        ref={ref}
        {...restProps}
      />
    </>
  );
});

const inputStyle = (width: string) => css`
  box-sizing: border-box;
  width: ${width};
  border: none;
  border: 1px solid ${colors.gray[200]};
  padding: ${pxToRem(9)};
  border-radius: ${pxToRem(4)};

  &::placeholder {
    color: ${colors.gray[200]};
  }
`;

export default Input;
