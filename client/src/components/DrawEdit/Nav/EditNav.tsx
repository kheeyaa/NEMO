import { css } from '@emotion/react';
import Icon from 'components/common/Icon';
import { colors } from 'const/style/colors';
import { MOBILE_WIDTH } from 'const/style/size';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { colorPickerState, actionState, contextState } from 'recoil/edit';
import { pxToRem } from 'utils/style/pxToRem';
import NavButton, { ButtonProps } from './NavButton';
import { SketchPicker } from 'react-color';
import { BACK_GROUND } from 'const/Canvas/canvas';

// colorPicker: https://casesandberg.github.io/react-color/
function EditNav() {
  const [color, setColor] = useRecoilState(colorPickerState);
  const [action, setAction] = useRecoilState(actionState);
  const [isShowColorPicker, setIsShowColorPicker] = useState(false);
  const [context] = useRecoilState(contextState);

  const navProps: ButtonProps[] = [
    {
      name: '이전',
      children: <Icon type="ArrowArcLeft" />,
      onClick: () => {
        console.log('hi');
      },
    },
    {
      name: '다음',
      children: <Icon type="ArrowArcRight" />,
      onClick: () => {
        console.log('hi');
      },
    },
    {
      name: '전체삭제',
      children: <Icon type="Trash" />,
      onClick: () => {
        if (!context) return;
        context.fillStyle = BACK_GROUND;
        context.fillRect(0, 0, 1000, 1000);
      },
    },
    {
      name: '색상',
      children: (
        <div css={colorBtn(color)}>
          <div className="inner" />
        </div>
      ),
      onClick: () => {
        setIsShowColorPicker((isShow) => !isShow);
      },
    },
    {
      name: '브러쉬',
      children: <Icon type="PaintBrush" />,
      onClick: () => {
        setAction('브러쉬');
      },
    },
    {
      name: '지우개',
      children: <Icon type="Eraser" />,
      onClick: () => {
        setAction('지우개');
      },
    },
    {
      name: '스포이드',
      children: <Icon type="Eyedropper" />,
      onClick: () => {
        setAction('스포이드');
      },
    },
    {
      name: '페인트',
      children: <Icon type="PaintBucket" />,
      onClick: () => {
        setAction('페인트');
      },
    },
  ];

  return (
    <nav css={navStyle}>
      <ul>
        {navProps.map(({ name, children, onClick }) => (
          <li key={name} className={action === name ? 'active' : ''}>
            <NavButton name={name} onClick={onClick}>
              {children}
            </NavButton>
          </li>
        ))}
      </ul>
      {isShowColorPicker && (
        <div className="sketchPicker">
          <SketchPicker
            color={color}
            onChange={(newColor) => setColor(newColor.hex)}
            onChangeComplete={(newColor) => setColor(newColor.hex)}
          />
        </div>
      )}
    </nav>
  );
}

const navStyle = css`
  max-width: ${pxToRem(MOBILE_WIDTH)};
  width: 100%;
  height: ${pxToRem(77 * 2)};
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  background-color: white;

  .sketchPicker {
    position: absolute;
    right: ${pxToRem(10)};
    top: ${pxToRem(-310)};
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
    border-top: 1px solid ${colors.gray[200]};
    border-left: 1px solid ${colors.gray[200]};
  }
  li {
    border-right: 1px solid ${colors.gray[200]};
    border-bottom: 1px solid ${colors.gray[200]};
  }
  .active {
    background-color: ${colors.gray[100]};
  }
`;

const colorBtn = (color: string) => css`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  border: 1px solid ${colors.black[100]};
  border-radius: ${pxToRem(4)};
  box-sizing: border-box;
  padding: 2%;

  .inner {
    width: 100%;
    height: 100%;
    background-color: ${color};
    border-radius: ${pxToRem(4)};
  }
`;

export default EditNav;
