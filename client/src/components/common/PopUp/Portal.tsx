import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

type PortalType = 'toast-root' | 'modal-root';

interface PortalProps {
  type: PortalType;
  children: ReactElement;
}

function Portal({ type, children }: PortalProps) {
  const $container = document.getElementById(type) as HTMLElement;
  return ReactDOM.createPortal(children, $container);
}

export default Portal;
