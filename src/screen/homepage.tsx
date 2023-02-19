import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonHome } from "../component/PokemonHome";

export const Homepage = () => {

    let [pokemonSearchName, setPokemonSearchName] = useState('');
    let navigate = useNavigate();

    return (
        <div>
            <h1 className="text-3xl font-bold flex justify-center mt-6 hover:underline">PokéDex</h1>
            <form className="flex justify-center mt-6" onSubmit={(event2) => {navigate("/" + pokemonSearchName)}}>
                <div>
                    <label className="block ml-7 mb-2 font-semibold" htmlFor="search">Pokémon Search</label>
                    <input onChange={(event) => setPokemonSearchName(event.target.value)} className="border rounded-2xl text-center" type="text" placeholder="Pokémon Name ?" name="search" id="search"/>
                </div>
               <div className="ml-5 mt-7">
                    <input type='submit' className="block font-semibold px-2 py-1 rounded-xl bg-gray-700 hover:text-green-300"/>
               </div>
            </form>
            <PokemonHome/>
        </div>
     );
}