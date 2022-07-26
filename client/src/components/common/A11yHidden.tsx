import 'assets/css/a11yhidden.css';
import React, { ReactElement } from 'react';

interface A11yHiddenProps {
  as?: string;
  classNames?: string[];
  children: string;
}

export default function A11yHidden({
  as = 'span',
  classNames = [''],
  ...restProps
}: A11yHiddenProps): ReactElement {
  return React.createElement(as, {
    className: ['a11yHidden', ...classNames].join(' '),
    ...restProps,
  });
}
