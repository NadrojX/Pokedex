import { PokemonCard } from "./PokemonCard"

let tab : any = [];

export const PokemonGen6 = () => {
    tab = []
    Gen6()
    return(
        <div className="grid grid-cols-6 gap-6 mt-5">
            {tab}
        </div>
    );
}

const Gen6 = () => {
    for (let i = 650; i < 722; i++) {
        let s = "" + i;
        tab.push(<PokemonCard id={s}></PokemonCard>)
    }
}