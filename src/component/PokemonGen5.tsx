import { PokemonCard } from "./PokemonCard"

let tab : any = [];

export const PokemonGen5 = () => {
    Gen5()
    return(
        <div className="grid grid-cols-6 gap-6 mt-5">
            {tab}
        </div>
    );
}

const Gen5 = () => {
    for (let i = 494; i < 650; i++) {
        let s = "" + i;
        tab.push(<PokemonCard id={s}></PokemonCard>)
    }
}