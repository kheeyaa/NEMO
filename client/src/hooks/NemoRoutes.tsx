import BasicLayout from 'layout/BasicLayout';
import App from 'page/App';
import DrawEdit from 'page/DrawEdit';
import Home from 'page/Home';
import MyStorage from 'page/MyStorage';
import PictureDetail from 'page/PictureDetail';
import Signin from 'page/Signin';
import Signup from 'page/Signup';
import Trends from 'page/Trends';
import UserPage from 'page/UserPage';
import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function NemoRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<BasicLayout />}>
            <Route index element={<Home />} />
            <Route path="trends" element={<Trends />} />
            <Route path="my-storage" element={<MyStorage />} />
            <Route path=":userId" element={<UserPage />} />
            <Route path=":userId/:pictureId" element={<PictureDetail />} />
          </Route>

          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="draw-edit" element={<DrawEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NemoRoutes;
