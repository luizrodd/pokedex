import axios from "axios";
import { useQuery } from 'react-query';

// Defina a função de busca do Pokémon sem usar hooks
async function fetchSinglePokemon(id: number) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
}

// Crie um hook personalizado que use o useQuery para buscar o Pokémon
export function useFetchSinglePokemon(id: number) {
  return useQuery(['pokemon', id], () => fetchSinglePokemon(id));
}
