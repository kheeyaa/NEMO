import { css } from '@emotion/react';
import Icon from 'components/common/Icon';
import Portal from 'components/common/PopUp/Portal';
import { colors } from 'const/style/colors';
import React, { useEffect, useRef, useState } from 'react';
import { pxToRem } from 'utils/style/pxToRem';
import { useSetRecoilState } from 'recoil';
import { ToastInfo, toastsState } from 'recoil/toast';

type ToastType = 'success' | 'error';

interface ToastProps {
  textLines: string[];
  type: ToastType;
  idx: number;
}

const TOAST_HEIGHT = 80; // px

const Toast = ({ textLines, type, idx }: ToastProps) => {
  const setToastInfos = useSetRecoilState<ToastInfo[]>(toastsState);
  const [isShow, setIsShow] = useState(true);
  const timer = useRef<any>();

  const handleClose = () => {
    setIsShow(false);
    setToastInfos((toastInfos) => [...toastInfos.slice(1)]);
  };

  useEffect(() => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      handleClose();
      timer.current = null;
    }, 3000);
  }, []);

  return (
    <Portal type="toast-root">
      <div css={[toastStyle(idx), isShow && slideIn]} className={type}>
        {textLines.map((text) => (
          <span key={text}>{text}</span>
        ))}

        {/* TODO. 닫는 버튼 기능
        <button className="closeButon" onClick={handleClose}>
            <Icon type="Close" strokeColor="white" size={20} />
          </button> */}
      </div>
    </Portal>
  );
};

const toastStyle = (idx: number) => css`
  box-sizing: border-box;
  position: fixed;
  right: ${pxToRem(6)};

  top: ${pxToRem(idx * (TOAST_HEIGHT + 5) + 50)};
  height: ${pxToRem(TOAST_HEIGHT)};

  width: ${pxToRem(300)};
  transform: translateX(110%);
  color: white;
  padding: ${pxToRem(16)};
  font-size: ${pxToRem(14)};

  margin-bottom: ${pxToRem(10)};

  &.success {
    background-color: ${colors.green[180]};
  }

  &.error {
    background-color: ${colors.red[180]};
  }

  .closeButon {
    border: none;
    background-color: transparent;
    padding: ${pxToRem(4)};
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const slideIn = css`
  animation: slidein 1s forwards;

  @keyframes slidein {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

export default Toast;
