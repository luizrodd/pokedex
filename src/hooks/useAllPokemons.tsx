// useFetchPokemons.js
import axios from "axios";
export async function useFetchPokemons() {
  const pokemonsData = [];

  for (let id = 1; id <= 150; id++) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      pokemonsData.push(response.data);
    } catch (error) {
      console.error(`Error fetching Pokemon data for ID ${id}:`, error);
    }
  }

  return pokemonsData;
}
