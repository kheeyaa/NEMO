import React, { ReactElement } from 'react';
import * as icons from 'assets/svg/icons';
import { css } from '@emotion/react';
import { pxToRem } from 'utils/style/pxToRem';
import { colors } from 'const/style/colors';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps {
  type: IconType;
  size?: number;
  strokeColor?: string;
  rotateDeg?: number;
}

function Icon({
  type,
  size = 24,
  strokeColor = colors.black[100],
  rotateDeg = 0,
}: IconProps): ReactElement {
  const SVG = icons[type];

  return (
    <SVG
      css={css`
        width: ${pxToRem(size)};
        height: auto;
        color: ${strokeColor};
        transform: rotate(${rotateDeg}deg);
      `}
    />
  );
}

export default Icon;
