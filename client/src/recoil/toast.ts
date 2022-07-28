import { atom } from 'recoil';

type ToastType = 'success' | 'error';

export interface ToastInfo {
  textLines: string[];
  type: ToastType;
  key: string;
}

export const toastsState = atom<ToastInfo[]>({
  key: 'toastsState',
  default: [],
});
