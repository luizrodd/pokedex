
import React from "react";
import { useQuery } from "react-query";
import { PokemonData } from "../Pokedex/Pokedex";
import { useFetchSinglePokemon } from "../../hooks/useSinglePokemon";
import { useParams } from "react-router";

export default function CardPokemon() {
  const { id } = useParams();
  const pokemonId = Number(id);
  const { data } = useFetchSinglePokemon(pokemonId) as { data: PokemonData };

  return (
    <div>
    {data ? (
      <div className="flex justify-center items-center">
        <div className="mr-4">
          <img
            src={data.sprites.versions["generation-v"]["black-white"].animated.front_default}
            alt={data.name}
            className="w-32"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <h2 className="text-lg">ID: {data.id}</h2>
          <h2 className="text-lg">Types: {data.types.map((type) => type.type.name).join(", ")}</h2>
          <div className="mt-2">
            <div className="flex">
              <span className="mr-2 font-semibold">Attack:</span>
              <span>{data.stats.filter((stat) => stat.stat.name === "attack").map((filtrado) => filtrado.base_stat).join(", ")}</span>
            </div>
            <div className="flex">
              <span className="mr-2 font-semibold">HP:</span>
              <span>{data.stats.filter((stat) => stat.stat.name === "hp").map((filtrado) => filtrado.base_stat).join(", ")}</span>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}
