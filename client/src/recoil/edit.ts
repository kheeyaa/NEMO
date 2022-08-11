import { atom } from 'recoil';

export const colorPickerState = atom<string>({
  key: 'colorPickerState',
  default: '#000',
});

export const lineWidthStepState = atom<number>({
  key: 'lineWidthStepState',
  default: 1,
});

type actionType = '브러쉬' | '지우개' | '스포이드' | '페인트';

export const actionState = atom<actionType>({
  key: 'actionState',
  default: '브러쉬',
});

export const contextState = atom<CanvasRenderingContext2D | null>({
  key: 'contextState',
  default: null,
});
