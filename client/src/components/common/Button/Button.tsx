import { css } from '@emotion/react';
import { colors } from 'const/style/colors';
import React, { useLayoutEffect, useState } from 'react';
import { pxToRem } from 'utils/style/pxToRem';

type ButtonType = 'Basic' | 'Fill';

interface BasicButtonStyle {
  backgroundColor?: string;
  border?: string;
  color?: string;
}

interface ButtonStyle extends BasicButtonStyle {
  width: string;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  buttonType?: ButtonType;
}

interface ButtonStylesType {
  [key: string]: BasicButtonStyle;
}

const buttonStyles: ButtonStylesType = {
  Basic: {
    backgroundColor: 'white',
    border: `1px solid ${colors.gray[200]}`,
    color: colors.black[100],
  },
  Fill: {
    backgroundColor: colors.yellow[100],
    border: 'none',
    color: 'white',
  },
};

function Button({
  width,
  backgroundColor,
  border,
  color,
  buttonType = 'Basic',
  children,
  ...restProps
}: ButtonProps) {
  const [style, setStyle] = useState({
    width,
    ...buttonStyles[buttonType],
  });

  useLayoutEffect(() => {
    const customStyle: BasicButtonStyle = { backgroundColor, border, color };
    let newStyle = {
      ...style,
    };
    Object.entries(customStyle).forEach(([key, value]) => {
      if (value) newStyle = { ...style, [key]: value };
    });

    setStyle({
      backgroundColor,
      border,
      color,
      ...newStyle,
    });
  }, [backgroundColor, border, color]);

  return (
    <button css={buttonStyle(style)} {...restProps}>
      {children}
    </button>
  );
}

const buttonStyle = ({
  width,
  backgroundColor,
  border,
  color,
}: ButtonStyle) => css`
  width: ${width};
  padding: ${pxToRem(15)};
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${backgroundColor};
  color: ${color};
  border: ${border};
  border-radius: ${pxToRem(4)};
`;

export default Button;
