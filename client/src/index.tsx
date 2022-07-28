import NemoRoutes from 'hooks/NemoRoutes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <NemoRoutes />
    </RecoilRoot>
  </React.StrictMode>,
);
