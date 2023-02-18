import { PokemonCard } from "./PokemonCard"

let tab : any = [];

export const PokemonGen7 = () => {
    Gen7()
    return(
        <div className="grid grid-cols-6 gap-6 mt-5">
            {tab}
        </div>
    );
}

const Gen7 = () => {
    for (let i = 722; i < 810; i++) {
        let s = "" + i;
        tab.push(<PokemonCard id={s}></PokemonCard>)
    }
}