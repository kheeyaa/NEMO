import { css } from '@emotion/react';
import { colors } from 'const/style/colors';
import React, { useLayoutEffect, useState } from 'react';
import { pxToRem } from 'utils/style/pxToRem';
import Input, { InputProps } from './Input';

interface ValidInputProps extends InputProps {
  regExp?: RegExp;
  warnningMessage: string;
  isValid?: boolean;
}

function ValidInput({
  regExp,
  warnningMessage,
  isValid = true,
  width,
  ...restProps
}: ValidInputProps) {
  const $input = React.createRef<HTMLInputElement>();
  const [isRegExpValid, setIsRegExpValid] = useState(true);
  const [isShow, setIsShow] = useState(!isValid);

  const handleInput = () => {
    const inputValue = $input.current?.value;
    if (!inputValue) return;

    const newIsRegExpValid = regExp ? regExp.test(inputValue) : true;
    setIsRegExpValid(newIsRegExpValid);
    console.log(newIsRegExpValid, inputValue);
  };

  useLayoutEffect(() => {
    setIsShow(!(isValid && isRegExpValid));
  }, [isRegExpValid, isValid]);

  return (
    <>
      <Input ref={$input} width={width} {...restProps} onChange={handleInput} />
      <div css={validMessageStyle(width)}>
        {isShow && <span className="warnningMessage">{warnningMessage}</span>}
      </div>
    </>
  );
}

const validMessageStyle = (width: string) => css`
  width: ${width};
  min-height: ${pxToRem(30)};

  display: flex;
  align-items: center;

  .warnningMessage {
    color: ${colors.red[200]};
    font-size: ${pxToRem(14)};
  }
`;

export default ValidInput;
