import React from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import { Homepage } from "./screen/homepage";
import { PokemonPage } from "./screen/PokemonPage";
import { PokemonGenSelector } from "./component/PokemonGenSelector";

function App() {
  return (
    <div className="container">
      <nav className="mt-5 flex justify-end">
        <NavLink
          className="ml-3 hover:underline"
          to="/Pokedex"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Accueil
        </NavLink>
        <NavLink
          className="ml-3 hover:underline"
          to="/Gen1"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Gen1
        </NavLink>
        <NavLink
          className="ml-3 hover:underline"
          to="/Gen2"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Gen2
        </NavLink>
        <NavLink
          className="ml-3 hover:underline"
          to="/Gen3"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Gen3
        </NavLink>
        <NavLink
          className="ml-3 hover:underline"
          to="/Gen4"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Gen4
        </NavLink>
        <NavLink
          className="ml-3 hover:underline"
          to="/Gen5"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Gen5
        </NavLink>
        <NavLink
          className="ml-3 hover:underline"
          to="/Gen6"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Gen6
        </NavLink>
        <NavLink
          className="ml-3 hover:underline"
          to="/Gen7"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Gen7
        </NavLink>
        <NavLink
          className="ml-3 hover:underline"
          to="/Gen8"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Gen8
        </NavLink>
        <NavLink
          className="ml-3 hover:underline"
          to="/Gen9"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Gen9
        </NavLink>
      </nav>
      <Routes>
        <Route path="/Pokedex" element={<Homepage />}></Route>
        <Route
          path="/Gen1"
          element={<PokemonGenSelector inferieur={1} superieur={152} />}
        ></Route>
        <Route
          path="/Gen2"
          element={<PokemonGenSelector inferieur={152} superieur={252} />}
        ></Route>
        <Route
          path="/Gen3"
          element={<PokemonGenSelector inferieur={253} superieur={387} />}
        ></Route>
        <Route
          path="/Gen4"
          element={<PokemonGenSelector inferieur={387} superieur={494} />}
        ></Route>
        <Route
          path="/Gen5"
          element={<PokemonGenSelector inferieur={494} superieur={650} />}
        ></Route>
        <Route
          path="/Gen6"
          element={<PokemonGenSelector inferieur={650} superieur={722} />}
        ></Route>
        <Route
          path="/Gen7"
          element={<PokemonGenSelector inferieur={722} superieur={810} />}
        ></Route>
        <Route
          path="/Gen8"
          element={<PokemonGenSelector inferieur={810} superieur={906} />}
        ></Route>
        <Route
          path="/Gen9"
          element={<PokemonGenSelector inferieur={906} superieur={1009} />}
        ></Route>
        <Route path="/:pokemonName" element={<PokemonPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
