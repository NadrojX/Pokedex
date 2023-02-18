import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PokemonPage = () => {

    let {pokemonName} = useParams();

    let [pokemonSprite, setPokemonSprite] = useState('');
    let [pokemonType, setPokemonType] = useState('');

    useEffect(() => {
        let fetchData = async () => {
            let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
            result.json().then(json => {
                setPokemonSprite(json.sprites.other["official-artwork"].front_default)
                setPokemonType(json.types[0].type.name)
            })
        }
        fetchData();
      });

    return (
        <div className="flex justify-center mt-20">
            <img id={pokemonType} className="object-cover h-40 w-70 rounded-2xl" src={pokemonSprite} alt=""/>
            <p className="text-center ml-2">{pokemonName}</p>
        </div>
    );
}