import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Boxes from '../views/Boxes';
import Scroll from '../views/Scroll';
import Layers from '../views/Layers';

const Router = () => {
  return (
      <Routes>
        <Route index element={ <Boxes /> } />
        <Route path="/scroll" element={ <Scroll /> } />
        <Route path="/projects" element={ <Layers /> } />
      </Routes>
  );
};

export default Router;
