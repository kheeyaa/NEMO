import React from 'react';
import ConfirmModal, {
  ModalProps,
} from 'components/common/PopUp/Modal/ConfirmModal';
import useModalContainer from './useModalContainer';

function useConfirmModal() {
  const { ModalContainer, show, close } = useModalContainer();

  const Modal = (props: ModalProps) => {
    return (
      <ModalContainer>
        <ConfirmModal {...props} close={close} />
      </ModalContainer>
    );
  };

  return { Modal, show };
}

export default useConfirmModal;
