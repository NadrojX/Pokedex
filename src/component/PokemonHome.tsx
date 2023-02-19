import { PokemonCard } from "./PokemonCard"

let tab : any = [];

export const PokemonHome = () => {
    Home()
    return(
        <div className="grid grid-cols-6 gap-6 mt-5">
            {tab}
        </div>
    );
}

const Home = () => {
    for (let i = 1; i < 1009; i++) {
        let s = "" + i;
        tab.push(<PokemonCard id={s}></PokemonCard>)
    }
}