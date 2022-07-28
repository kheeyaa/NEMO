import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { ToastInfo, toastsState } from 'recoil/toast';
import Toast from 'components/common/PopUp/Toast';

type ToastType = 'success' | 'error';

function useToast() {
  const setToastInfos = useSetRecoilState<ToastInfo[]>(toastsState);

  return {
    ToastStack,
    show: ({ textLines, type }: { textLines: string[]; type: ToastType }) => {
      setToastInfos((toastInfos) => [
        ...toastInfos,
        {
          textLines,
          type,
          key: Date.now().toString(),
        },
      ]);
    },
  };
}

function ToastStack() {
  const toastInfos = useRecoilValue<ToastInfo[]>(toastsState);

  return (
    <>
      {toastInfos.map(({ textLines, type, key }, idx) => {
        return <Toast textLines={textLines} key={key} type={type} idx={idx} />;
      })}
    </>
  );
}

export default useToast;
