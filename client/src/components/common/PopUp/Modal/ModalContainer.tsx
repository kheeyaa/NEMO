import React from 'react';
import Portal from 'components/common/PopUp/Portal';
import { css } from '@emotion/react';

type ModalContainerProps = {
  close: () => void;
  children: any;
};

function ModalContainer({ close, children }: ModalContainerProps) {
  return (
    <Portal type="modal-root">
      <div css={modalContainerStyle}>
        <div className="dim" onClick={close} />
        {children}
      </div>
    </Portal>
  );
}

const modalContainerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  .dim {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @keyframes popup {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  animation: popup 0.5s forwards;
`;

export default ModalContainer;
