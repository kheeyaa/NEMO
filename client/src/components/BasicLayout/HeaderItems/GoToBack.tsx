import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoToBack() {
  const navigate = useNavigate();
  const handleGoToBack = () => {
    navigate(-1);
  };

  return <button onClick={handleGoToBack}>뒤로가기</button>;
}

export default GoToBack;
