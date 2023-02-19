import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type PokemonProps = {
  id: string;
};

export const PokemonCard: React.FC<PokemonProps> = ({ id }) => {
  let [pokemonArtwork, setPokemonArtwork] = useState('');
  let [pokemonName, setPokemonName] = useState(null);
  let [pokemonType, setPokemonType] = useState('');

  useEffect(() => {
    let fetchData = async () => {
        let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        result.json().then(json => {
            setPokemonName(json.forms[0].name)
            setPokemonArtwork(json.sprites.other["official-artwork"].front_default)
            setPokemonType(json.types[0].type.name)
        })
    }
    fetchData();
  });

  return (
    <div className="mt-10">
        <img id={pokemonType} className="flex items-center text-center rounded-2xl" src={pokemonArtwork} alt=""/>
        <NavLink to={'/' + pokemonName}  className="flex justify-center ml-2 hover:font-bold hover:text-green-300">{pokemonName}</NavLink>
    </div>
  )
};