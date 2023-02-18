import { useEffect, useState } from "react";

type PokemonProps = {
  id: string;
};

export const PokemonCard: React.FC<PokemonProps> = ({ id }) => {
  let [pokemonSprite, setPokemonSprite] = useState('');
  let [pokemonName, setPokemonName] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
        let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        result.json().then(json => {
            setPokemonName(json.forms[0].name)
            setPokemonSprite(json.sprites.front_default)
        })
    }
    fetchData();
  });

  return (
    <div className="mt-10">
        <img className="bg-slate-300 rounded-2xl" src={pokemonSprite} alt=""/>
        <p className="text-center hover:font-bold hover:text-green-300">{pokemonName}</p>
    </div>
  )
};
