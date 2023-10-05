import Card from "../../components/Card/Card";
import { useQuery } from "react-query";
import { useFetchPokemons } from "../../hooks/useAllPokemons";
import { useState } from "react";
// Aqui é o que vai ficar disponibilizado para o map trazer de dentro da api de pokemon
export interface PokemonData {
  name: string;
  id: number;
  sprites: {
    versions: {
      ["generation-v"]: {
        ["black-white"]: {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export default function Pokedex() {
  const { data: pokemons } = useQuery("pokemons", useFetchPokemons);
  const [pokeSearch, setPokeSearch] = useState("");
  console.log(pokeSearch);
  return (
    <div className="m-5">
      <span>Search</span>
      <input
        type="text"
        onChange={(e) => setPokeSearch(e.target.value)}
        value={pokeSearch}
        className="bg-black  text-white p-2 rounded h-8"
      />
      <div className="flex flex-wrap justify-center">
        {pokemons && pokemons.length > 0 ? (
          pokemons
            .filter((pokemon: PokemonData) => pokemon.name.includes(pokeSearch))
            .map((pokemon: PokemonData) => (
              <Card
                id={pokemon.id}
                key={pokemon.name}
                statsAttackNumber={pokemon.stats
                  .filter((stat) => stat.stat.name === "attack")
                  .map((filtrado) => filtrado.base_stat)
                  .join(",")}
                statsHpNumber={pokemon.stats
                  .filter((stat) => stat.stat.name === "hp")
                  .map((filtrado) => filtrado.base_stat)
                  .join(",")}
                statsAttackName={pokemon.stats
                  .filter((stat) => stat.stat.name === "attack")
                  .map((filtrado) => filtrado.stat.name)
                  .join(",")}
                statsHpName={pokemon.stats
                  .filter((stat) => stat.stat.name === "hp")
                  .map((filtrado) => filtrado.stat.name)
                  .join(",")}
                typeName={pokemon.types.map((type) => type.type.name).join(",")}
                name={pokemon.name}
                front_default={
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
              />
            ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
