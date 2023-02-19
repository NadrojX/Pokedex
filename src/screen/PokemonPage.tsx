import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PokemonPage = () => {

    let {pokemonName} = useParams();

    let [pokemonArtwork, setPokemonArtwork] = useState('');
    let [pokemonType, setPokemonType] = useState('');
    let [pokemonType2, setPokemonType2] = useState('');
    let [pokemonAbilitie, setPokemonAbilitie] = useState('');
    let [pokemonAbilitie2, setPokemonAbilitie2] = useState('');
    let [pokemonSprite, setPokemonSprite] = useState('');
    let [pokemonSprite2, setPokemonSprite2] = useState('');

    useEffect(() => {
        let fetchData = async () => {
            let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
            result.json().then(json => {
                setPokemonArtwork(json.sprites.other["official-artwork"].front_default)
                setPokemonType(json.types[0].type.name)
                try{
                    setPokemonType2(json.types[1].type.name)
                } catch {

                }
                setPokemonAbilitie(json.abilities[0].ability.name)
                try{
                    setPokemonAbilitie2(json.abilities[1].ability.name)
                } catch {

                }
                setPokemonSprite(json.sprites.front_default)
                try{
                    setPokemonSprite2(json.sprites.front_shiny)
                } catch {
                    
                }
                console.log(json)
            })
        }
        fetchData();
      });

    return (
        <div className="flex justify-center mt-20">
            <span className="flex justify-center">
                <img id={pokemonType} className="object-cover h-40 w-70 rounded-2xl mt-3" src={pokemonArtwork} alt=""/>
                <div className="inline-block">
                    <p className="text-center mt-4">Name : {pokemonName}</p>
                    <p className="text-center ml-5"> Type 1 : {pokemonType} | Type 2 : {pokemonType2}</p>
                    <p className="text-center ml-5">Abilitie 1 : {pokemonAbilitie} | Abilitie 2 : {pokemonAbilitie2}</p>
                    <p className="text-center ml-5"></p>
                </div>
                <div>
                    <img src={pokemonSprite} alt=""/>
                    <img src={pokemonSprite2} alt=""/>
                </div>
            </span>
        </div>
    );
}