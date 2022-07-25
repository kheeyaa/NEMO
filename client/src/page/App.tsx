import React from 'react';
import { Global } from '@emotion/react';
import reset from 'const/style/reset';
import { Outlet } from 'react-router-dom';
import 'assets/css/normalize.css';

function App() {
  return (
    <div className="App">
      <Global styles={reset} />
      <Outlet />
    </div>
  );
}

export default App;
