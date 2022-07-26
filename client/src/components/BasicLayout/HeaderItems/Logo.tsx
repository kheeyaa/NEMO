import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from 'assets/svg/logo/logo1.svg';
import A11yHidden from 'components/common/A11yHidden';
import { css } from '@emotion/react';
import { pxToRem } from 'utils/style/pxToRem';

function Logo() {
  return (
    <Link to="/">
      <A11yHidden>홈으로 가기</A11yHidden>
      <LogoSvg
        css={css`
          height: ${pxToRem(24)};
          width: auto;
        `}
      />
    </Link>
  );
}

export default Logo;
