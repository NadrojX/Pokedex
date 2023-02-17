import React from 'react';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import { Homepage } from './screen/homepage';

function App() {
  return (
    <div className='container'>
      <nav className='mt-5 flex justify-end'>
        <NavLink className='ml-3 hover:underline' to='/Pokedex' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Accueil</NavLink>
      </nav>
      <Routes>
        <Route path='/Pokedex' element={<Homepage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;