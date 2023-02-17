import React from 'react';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import { Homepage } from './screen/homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
    </Routes>
  );
}

export default App;