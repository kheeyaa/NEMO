import React from 'react';
import { css } from '@emotion/react';
import { absoluteCenter } from 'const/style/absoluteCenter';
import { colors } from 'const/style/colors';
import { MOBILE_WIDTH } from 'const/style/size';
import { pxToRem } from 'utils/style/pxToRem';

export type ChoiceType = {
  text: string;
  handleChoice: () => void;
};

export type ModalProps = {
  message?: string;
  choiceList: ChoiceType[];
  cancelText: string;
  close?: () => void;
};

function ChoiceModal({ message, choiceList, cancelText, close }: ModalProps) {
  return (
    <div css={[choiceModalStyle, absoluteCenter]}>
      {message && (
        <p className="message">
          {message.split('\\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      )}

      <div className="buttonWrapper">
        {choiceList.map(({ text, handleChoice }) => (
          <button
            key={text}
            type="button"
            onClick={() => {
              handleChoice();
              close && close();
            }}
          >
            {text}
          </button>
        ))}

        <button type="button" onClick={close}>
          {cancelText}
        </button>
      </div>
    </div>
  );
}

const choiceModalStyle = css`
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
    border-bottom: 1px solid ${colors.gray[200]};

    span {
      margin: ${pxToRem(5)};
    }
  }

  .buttonWrapper {
    display: flex;
    flex-direction: column;

    button {
      padding: ${pxToRem(24)};
      background-color: transparent;
      border: none;
      width: 100%;
      transition: background 0.2s ease-in;
      border-bottom: 1px solid ${colors.gray[200]};
    }

    button:hover {
      background-color: ${colors.yellow[100]};
      color: white;
    }

    button: last-of-type {
      border-bottom: none;
    }
  }
`;

export default ChoiceModal;
