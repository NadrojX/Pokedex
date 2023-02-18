import { PokemonCard } from "./PokemonCard"

let tab : any = [];

export const PokemonGen2 = () => {
    Gen2()
    return(
        <div className="grid grid-cols-6 gap-6 mt-5">
            {tab}
        </div>
    );
}

const Gen2 = () => {
    for (let i = 152; i < 252; i++) {
        let s = "" + i;
        tab.push(<PokemonCard id={s}></PokemonCard>)
    }
}