import React from 'react';
import { Outlet } from 'react-router-dom';

function BasicLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default BasicLayout;
