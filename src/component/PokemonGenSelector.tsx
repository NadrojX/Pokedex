import { PokemonCard } from "./PokemonCard";

let tab: any = [];

type PokemonCardProps = {
  inferieur: number;
  superieur: number;
};

export const PokemonGenSelector: React.FC<PokemonCardProps> = ({
  inferieur,
  superieur,
}) => {
  tab = [];
  Home(inferieur, superieur);
  return <div className="grid grid-cols-6 gap-6 mt-5">{tab}</div>;
};

const Home = (inferieur: number, superieur: number) => {
  for (let i = inferieur; i < superieur; i++) {
    let s = "" + i;
    tab.push(<PokemonCard id={s} />);
  }
};
