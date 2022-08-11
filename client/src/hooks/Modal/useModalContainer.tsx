import ModalContainer from 'components/common/PopUp/Modal/ModalContainer';
import useKeyDownHandler from 'hooks/useKeyDownHandler';
import React, { useState } from 'react';

function useModalContainer() {
  const [isShow, setIsShow] = useState(false);

  const show = () => {
    setIsShow(true);
  };

  const close = () => {
    setIsShow(false);
  };

  /** ESC Click */
  useKeyDownHandler({ key: 'Escape', handler: close });

  const Modal = ({ children }: any) =>
    isShow ? <ModalContainer close={close}>{children}</ModalContainer> : <></>;

  return { ModalContainer: Modal, show, close };
}

export default useModalContainer;
