import { PokemonCard } from "../component/PokemonCard";

export const Homepage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold flex justify-center mt-6 hover:underline">PokéDex</h1>
            <form className="flex justify-center mt-6">
                <div>
                    <label className="block ml-7 mb-2 font-semibold" htmlFor="search">Pokémon Search</label>
                    <input className="border rounded-2xl text-center" type="text" placeholder="Pokémon Name ?" name="search" id="search"/>
                </div>
               <div className="ml-5 mt-7">
                    <input type='submit' className="block font-semibold px-2 py-1 rounded-xl bg-gray-700 hover:text-green-300"/>
               </div>
            </form>
            <div className="flex justify-between mr-5">
                <PokemonCard id="1"/>
                <PokemonCard id="2"/>
                <PokemonCard id="3"/>
                <PokemonCard id="4"/>
                <PokemonCard id="5"/>
                <PokemonCard id="6"/>
            </div>
        </div>
     );
}