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

    let [url, setUrl] = useState('');

    let [pokemonGen, setPokemonGen] = useState('');

    let [enPokemonDescription, setEnPokemonDescription] = useState('');
    let [frPokemonDescription, setFrPokemonDescription] = useState('');
    let [frPokemonName, setFrPokemonName] = useState('');

    useEffect(() => {
        let fetchData = async () => {
            let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
            result.json().then(json => {
                setPokemonArtwork(json.sprites.other["official-artwork"].front_default)
                setPokemonType(json.types[0].type.name)
                setUrl(json.species.url)
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
            })
            result = await fetch(url);
            result.json().then(json => {
                setFrPokemonName(json.names[4].name)
                setPokemonGen(json.generation.name)
                if(pokemonGen === 'generation-i'){
                    setEnPokemonDescription(json.flavor_text_entries[81].flavor_text)
                    setFrPokemonDescription(json.flavor_text_entries[87].flavor_text)
                }
                if(pokemonGen === 'generation-ii'){
                    setEnPokemonDescription(json.flavor_text_entries[41].flavor_text)
                    setFrPokemonDescription(json.flavor_text_entries[45].flavor_text)
                }
                if(pokemonGen === 'generation-iii'){
                    setEnPokemonDescription(json.flavor_text_entries[38].flavor_text)
                    setFrPokemonDescription(json.flavor_text_entries[42].flavor_text)
                }
                if(pokemonGen === 'generation-iv'){
                    setEnPokemonDescription(json.flavor_text_entries[0].flavor_text)
                    setFrPokemonDescription(json.flavor_text_entries[5].flavor_text)
                }
                if(pokemonGen === 'generation-v'){
                    setEnPokemonDescription(json.flavor_text_entries[5].flavor_text)
                    setFrPokemonDescription(json.flavor_text_entries[0].flavor_text)
                }
                if(pokemonGen === 'generation-vi'){
                    setEnPokemonDescription(json.flavor_text_entries[6].flavor_text)
                    setFrPokemonDescription(json.flavor_text_entries[2].flavor_text)
                }
                if(pokemonGen === 'generation-vii'){
                    setEnPokemonDescription(json.flavor_text_entries[7].flavor_text)
                    setFrPokemonDescription(json.flavor_text_entries[3].flavor_text)
                }
                if(pokemonGen === 'generation-vii'){
                    setEnPokemonDescription(json.flavor_text_entries[7].flavor_text)
                    setFrPokemonDescription(json.flavor_text_entries[3].flavor_text)
                }
                if(pokemonGen === 'generation-viii'){
                    setEnPokemonDescription(json.flavor_text_entries[7].flavor_text)
                    setFrPokemonDescription(json.flavor_text_entries[3].flavor_text)
                }
                if(pokemonGen === 'generation-ix'){
                    setEnPokemonDescription("No description.")
                    setFrPokemonDescription("Pas de description.")
                }
            })
        }
        fetchData();
      });

    return (
        <div className="flex justify-center mt-20">
            <img id={pokemonType} className="object-cover h-40 w-70 rounded-2xl mt-16" src={pokemonArtwork} alt=""/>
            <span className="flex justify-center">
                <div className="inline-block">
                    <p className="text-center mt-4">[EN] : {pokemonName} | [FR] : {frPokemonName} </p>
                    <p className="text-center ml-5">------------------------------------------------------</p>
                    <p className="text-center ml-5"> Type 1 : {pokemonType} | Type 2 : {pokemonType2}</p>
                    <p className="text-center ml-5">------------------------------------------------------</p>
                    <p className="text-center ml-5">Abilitie 1 : {pokemonAbilitie} | Abilitie 2 : {pokemonAbilitie2}</p>
                    <p className="text-center ml-5">------------------------------------------------------</p>
                    <p className="text-center ml-5 underline">[EN] Description :</p>
                    <p className="text-center ml-5">{enPokemonDescription}</p>
                    <p className="text-center ml-5">------------------------------------------------------</p>
                    <p className="text-center ml-5 underline">[FR] Description :</p>
                    <p className="text-center ml-5">{frPokemonDescription}</p>
                    <p className="text-center ml-5">------------------------------------------------------</p>
                    <p className="text-center ml-5 underline">Sprite : </p>
                    <p className="text-center underline inline-flex ml-44 lg:ml-72"> 
                        <img src={pokemonSprite} alt=""/>
                        <img src={pokemonSprite2} alt=""/>
                    </p>
                </div>
            </span>
        </div>
    );
}