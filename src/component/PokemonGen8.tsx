import { PokemonCard } from "./PokemonCard"

let tab : any = [];

export const PokemonGen8 = () => {
    tab = []
    Gen8()
    return(
        <div className="grid grid-cols-6 gap-6 mt-5">
            {tab}
        </div>
    );
}

const Gen8= () => {
    for (let i = 810; i < 899; i++) {
        let s = "" + i;
        tab.push(<PokemonCard id={s}></PokemonCard>)
    }
}