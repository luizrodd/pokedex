import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import axios, { AxiosResponse } from "axios";

// Aqui é o que vai ficar disponibilizado para o map trazer de dentro da api de pokemon
interface PokemonData {
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
  const [pokemons, setPokemons] = useState<PokemonData[]>([]); // Agora é um array de objetos PokemonData

  async function fetchPokemons() {
    const pokemonsData: PokemonData[] = [];

    for (let id = 1; id < 150; id++) {
      try {
        const response: AxiosResponse<PokemonData> = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        pokemonsData.push(response.data);
      } catch (error) {
        console.error(`Error fetching Pokemon data for ID ${id}:`, error);
      }
    }

    // Defina o estado "pokemons" com os dados de todos os Pokémon após o loop
    setPokemons(pokemonsData);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="flex m-10 flex-wrap justify-center">
      {pokemons.length > 0 ? (
        pokemons.map((pokemon: PokemonData) => (
          <Card
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
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
