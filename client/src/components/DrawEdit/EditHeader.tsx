import React from 'react';
import Header from 'components/BasicLayout/Header';
import useConfirmModal from 'hooks/Modal/useConfirmModal';
import { useNavigate } from 'react-router-dom';
import IconButton from 'components/common/Button/IconButton';
import useChoiceModal from 'hooks/Modal/useChoiceModal';
import { useRecoilValue } from 'recoil';
import { contextState } from 'recoil/edit';

function EditHeader() {
  const { Modal: ConfirmModal, show: showConfirmModal } = useConfirmModal();
  const { Modal: ChoiceModal, show: showChoiceModal } = useChoiceModal();
  const { Modal: WarnModal, show: showWarnModal } = useConfirmModal();

  const context = useRecoilValue(contextState);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    const canvas = context?.canvas;
    if (!canvas) {
      showWarnModal();
      return;
    }

    const imageName = 'nemo-my-draw';
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = imageName;
    link.click();
  };

  const choiceList = [
    {
      text: '작업중인 파일로 저장하기',
      handleChoice: () => {
        console.log('작업중인 파일로 저장하기');
      },
    },
    {
      text: '사진으로 저장하기',
      handleChoice: handleSave,
    },
    {
      text: '게시물로 등록하기',
      handleChoice: () => {
        console.log('게시물로 등록하기');
      },
    },
  ];

  return (
    <>
      <Header
        LeftContent={<IconButton type="ArrowLeft" onClick={showConfirmModal} />}
        RightContent={<IconButton type="Menu" onClick={showChoiceModal} />}
      />
      <ConfirmModal
        message="그리고 있던 그림이 있어요.\n 그림이 삭제되는데 괜찮아요?"
        confirmText="네 나갈게요"
        cancelText="아니요"
        handleConfirm={handleBack}
      />
      <ChoiceModal
        message="우와~ 그림 다 그리셨나요?"
        choiceList={choiceList}
        cancelText="취소"
      />
      <WarnModal
        message="문제가 발생했어요...ㅠㅠ \n 잠시후 다시 시도해주세요!"
        confirmText="확인"
        cancelText="아니요"
        hasCancelBtn={false}
      />
    </>
  );
}

export default EditHeader;
