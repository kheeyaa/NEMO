import { css } from '@emotion/react';
import A11yHidden from 'components/common/A11yHidden';
import Icon from 'components/common/Icon';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoToBack() {
  const navigate = useNavigate();
  const handleGoToBack = () => {
    navigate(-1);
  };

  return (
    <button css={buttonStyle} onClick={handleGoToBack}>
      <A11yHidden>뒤로가기</A11yHidden>
      <Icon type="ArrowLeft" />
    </button>
  );
}

const buttonStyle = css`
  background-color: transparent;
  border: none;
  padding: 0;
`;

export default GoToBack;
