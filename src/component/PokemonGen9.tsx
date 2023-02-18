import { PokemonCard } from "./PokemonCard"

let tab : any = [];

export const PokemonGen9 = () => {
    Gen9()
    return(
        <div className="grid grid-cols-6 gap-6 mt-5">
            {tab}
        </div>
    );
}

const Gen9 = () => {
    for (let i = 899; i < 1009; i++) {
        let s = "" + i;
        tab.push(<PokemonCard id={s}></PokemonCard>)
    }
}