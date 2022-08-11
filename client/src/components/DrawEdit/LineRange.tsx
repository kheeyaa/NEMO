import { css } from '@emotion/react';
import A11yHidden from 'components/common/A11yHidden';
import { colors } from 'const/style/colors';
import React from 'react';
import { useRecoilState } from 'recoil';
import { colorPickerState, lineWidthStepState } from 'recoil/edit';
import { pxToRem } from 'utils/style/pxToRem';

function LineRange() {
  const [lineWidthStep, setLineWidthStep] = useRecoilState(lineWidthStepState);
  const [color] = useRecoilState(colorPickerState);

  return (
    <div css={lineRangeStyle(color, `${(lineWidthStep - 1) * 11}%`)}>
      <A11yHidden as="label" htmlFor="rangeInput">
        선 두께 조절
      </A11yHidden>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setLineWidthStep(+e.target.value);
        }}
        type="range"
        value={lineWidthStep}
        min="1"
        max="10"
        step="1"
        id="rangeInput"
      />
    </div>
  );
}

const lineRangeStyle = (color: string, step: string) => css`
  padding: ${pxToRem(25)};
  box-sizing: border-box;
  width: 100%;

  input {
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 100%;
    height: ${pxToRem(15)};
    border-radius: 5px;
    background: linear-gradient(
      90deg,
      ${color} ${step},
      ${colors.gray[100]} ${step}
    );
    outline: none;
  }

  input: hover {
    cursor: pointer;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${pxToRem(30)};
    height: ${pxToRem(30)};
    border-radius: 50%;
    background: ${color};
    border: ${pxToRem(4)} solid #fff;
  }

  input::-moz-range-thumb {
    width: ${pxToRem(30)};
    height: ${pxToRem(30)};
    border-radius: 50%;
    background: ${color};
    border: ${pxToRem(4)} solid #fff;
  }
`;

export default LineRange;
