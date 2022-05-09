import React from 'react';
import { Routes, Route} from "react-router-dom";
import './index.css';

//SCREENS
import Home from './screens/Home';
import Exame from './screens/Exame';
import ExameList from './screens/ExameList';




function Routing() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'exame'} element={<Exame />} />
      <Route path={'exameList'} element={<ExameList />} />

    </Routes>
  );
}

export default Routing;