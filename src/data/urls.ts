export const API_URL_POKEMON = "https://pokeapi.co/api/v2";

export const getPokemons = (limit = "10") =>
  `${API_URL_POKEMON}/pokemon?limit=${limit}`;

export const getPokemon = (id: string) => `${API_URL_POKEMON}/pokemon/${id}`;
