import { PokemonCard } from "./PokemonCard"

let tab : any = [];

export const PokemonGen4 = () => {
    tab = []
    Gen4()
    return(
        <div className="grid grid-cols-6 gap-6 mt-5">
            {tab}
        </div>
    );
}

const Gen4 = () => {
    for (let i = 387; i < 494; i++) {
        let s = "" + i;
        tab.push(<PokemonCard id={s}></PokemonCard>)
    }
}