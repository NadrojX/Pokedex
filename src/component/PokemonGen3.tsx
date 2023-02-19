import { PokemonCard } from "./PokemonCard"

let tab : any = [];

export const PokemonGen3 = () => {
    tab = []
    Gen3()
    return(
        <div className="grid grid-cols-6 gap-6 mt-5">
            {tab}
        </div>
    );
}

const Gen3 = () => {
    for (let i = 252; i < 387; i++) {
        let s = "" + i;
        tab.push(<PokemonCard id={s}></PokemonCard>)
    }
}