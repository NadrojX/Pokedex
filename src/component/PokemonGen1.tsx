import { PokemonCard } from "./PokemonCard"

let tab : any = [];

export const PokemonGen1 = () => {
    tab = []
    Gen1()
    return(
        <div className="grid grid-cols-6 gap-6 mt-5">
            {tab}
        </div>
    );
}

const Gen1 = () => {
    for (let i = 1; i < 152; i++) {
        let s = "" + i;
        tab.push(<PokemonCard id={s}></PokemonCard>)
    }
}