import React from 'react';
import { css } from '@emotion/react';
import { absoluteCenter } from 'const/style/absoluteCenter';
import { colors } from 'const/style/colors';
import { MOBILE_WIDTH } from 'const/style/size';
import { pxToRem } from 'utils/style/pxToRem';

export type ModalProps = {
  message: string;
  cancelText?: string;
  confirmText?: string;
  handleCancel?: () => void;
  handleConfirm?: () => void;
  close?: () => void;
};

function ConfirmModal({
  message,
  cancelText = '취소',
  confirmText = '확인',
  handleCancel,
  handleConfirm,
  close,
}: ModalProps) {
  return (
    <div css={[confirmModalStyle, absoluteCenter]}>
      <p className="message">
        {message.split('\\n').map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>

      <div className="buttonWrapper">
        <button
          type="button"
          onClick={() => {
            handleCancel && handleCancel();
            close && close();
          }}
        >
          {cancelText}
        </button>
        <button
          type="button"
          onClick={() => {
            handleConfirm && handleConfirm();
            close && close();
          }}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
}

const confirmModalStyle = css`
  box-sizing: border-box;
  width: 85%;
  min-width: ${pxToRem(MOBILE_WIDTH * 0.6)};
  max-width: ${pxToRem(MOBILE_WIDTH * 0.85)};

  background-color: white;
  border-radius: ${pxToRem(4)};

  .message {
    box-sizing: border-box;
    width: 100%;
    padding: ${pxToRem(24)};
    min-height: ${pxToRem(150)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      margin: ${pxToRem(5)};
    }
  }

  .buttonWrapper {
    display: flex;
    border-top: 1px solid ${colors.gray[200]};

    button {
      padding: ${pxToRem(24)};
      background-color: transparent;
      border: none;
      width: 100%;
      transition: background 0.2s ease-in;
    }

    button:hover {
      background-color: ${colors.yellow[100]};
      color: white;
    }

    button: last-of-type {
      border-left: 1px solid ${colors.gray[200]};
    }
    button: first-of-type {
      border: none;
    }
  }
`;

export default ConfirmModal;
