import React from 'react';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import { Homepage } from './screen/homepage';
import { PokemonGen1 } from './component/PokemonGen1';
import { PokemonGen2 } from './component/PokemonGen2';
import { PokemonGen3 } from './component/PokemonGen3';
import { PokemonGen4 } from './component/PokemonGen4';
import { PokemonGen6 } from './component/PokemonGen6';
import { PokemonGen7 } from './component/PokemonGen7';
import { PokemonGen8 } from './component/PokemonGen8';
import { PokemonGen9 } from './component/PokemonGen9';
import { PokemonGen5 } from './component/PokemonGen5';

function App() {
  return (
    <div className='container'>
      <nav className='mt-5 flex justify-end'>
        <NavLink className='ml-3 hover:underline' to='/Pokedex' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Accueil</NavLink>
        <NavLink className='ml-3 hover:underline' to='/Gen1' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Gen1</NavLink>
        <NavLink className='ml-3 hover:underline' to='/Gen2' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Gen2</NavLink>
        <NavLink className='ml-3 hover:underline' to='/Gen3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Gen3</NavLink>
        <NavLink className='ml-3 hover:underline' to='/Gen4' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Gen4</NavLink>
        <NavLink className='ml-3 hover:underline' to='/Gen5' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Gen5</NavLink>
        <NavLink className='ml-3 hover:underline' to='/Gen6' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Gen6</NavLink>
        <NavLink className='ml-3 hover:underline' to='/Gen7' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Gen7</NavLink>
        <NavLink className='ml-3 hover:underline' to='/Gen8' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Gen8</NavLink>
        <NavLink className='ml-3 hover:underline' to='/Gen9' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'}) }>Gen9</NavLink>
      </nav>
      <Routes>
        <Route path='/Pokedex' element={<Homepage/>}></Route>
        <Route path='/Gen1' element={<PokemonGen1/>}></Route>
        <Route path='/Gen2' element={<PokemonGen2/>}></Route>
        <Route path='/Gen3' element={<PokemonGen3/>}></Route>
        <Route path='/Gen4' element={<PokemonGen4/>}></Route>
        <Route path='/Gen5' element={<PokemonGen5/>}></Route>
        <Route path='/Gen6' element={<PokemonGen6/>}></Route>
        <Route path='/Gen7' element={<PokemonGen7/>}></Route>
        <Route path='/Gen8' element={<PokemonGen8/>}></Route>
        <Route path='/Gen9' element={<PokemonGen9/>}></Route>
      </Routes>
    </div>
  );
}

export default App;