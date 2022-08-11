import React from 'react';
import useModalContainer from './useModalContainer';
import ChoiceModal, {
  ModalProps,
} from 'components/common/PopUp/Modal/ChoiceModal';

function useChoiceModal() {
  const { ModalContainer, show, close } = useModalContainer();

  const Modal = (props: ModalProps) => {
    return (
      <ModalContainer>
        <ChoiceModal {...props} close={close} />
      </ModalContainer>
    );
  };

  return { Modal, show };
}

export default useChoiceModal;
