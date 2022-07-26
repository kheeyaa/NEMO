import React, { ReactElement } from 'react';
import * as icons from 'assets/svg';
import { css } from '@emotion/react';
import { pxToRem } from 'utils/style/pxToRem';
import { colors } from 'const/style/colors';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps {
  type: IconType;
  size?: number;
  strokeColor?: string;
}

function Icon({
  type,
  size = 30,
  strokeColor = colors.black[100],
}: IconProps): ReactElement {
  const SVG = icons[type];

  return (
    <SVG
      css={css`
        width: ${pxToRem(size)};
        height: auto;
        color: ${strokeColor};
      `}
    />
  );
}

export default Icon;
