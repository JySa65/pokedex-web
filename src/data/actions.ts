import http from "./http";

import * as urls from "./urls";
import { Pokemon, PokemonsResponse } from "../Interfaces/pokemon";

export const getPokemons = (): Promise<PokemonsResponse> => {
  return http.get(urls.getPokemons());
};

export const getPokemonsPaginated = (
  url: string | null
): Promise<PokemonsResponse> => {
  if (url === null) {
    return http.get(urls.getPokemons("10&offset=10"));
  }
  return http.get(url);
};

export const getPokemon = (id: string): Promise<Pokemon> => {
  return http.get(urls.getPokemon(id));
};
