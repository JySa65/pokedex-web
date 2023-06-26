import {
  EvolutionChain,
  Pokemon,
  PokemonSpecies,
  PokemonsResponse,
} from "../Interfaces/pokemon";
import { getPokemons, getPokemonsPaginated } from "../data/actions";
import http from "../data/http";
import { getSpecies } from "../utils";

const cache = new Map();
export const revalidate = 3600; // revalidate every hour

const _getPokemon = async (result: PokemonsResponse["results"]) => {
  const pokemonInfo = result.map(async (pokemon) => {
    try {
      const pokemonData = (await http.get(pokemon.url)) as Pokemon;
      return pokemonData;
    } catch {
      return {} as Pokemon;
    }
  });
  const pokemonInfoList = await Promise.all(pokemonInfo);
  return pokemonInfoList;
};

export async function getAllInfoPokemon(): Promise<Pokemon[]> {
  if (cache.has("all") && revalidate > Date.now() - cache.get("all").time) {
    return cache.get("all").pokemonInfoList;
  }

  try {
    const { results } = await getPokemons();
    const pokemonInfoList = await _getPokemon(results);
    cache.set("all", {
      pokemonInfoList,
      time: Date.now(),
    });
    return pokemonInfoList;
  } catch (error) {
    return [];
  }
}

export async function getAllInfoPokemonPaginated(
  url: string | null = null
): Promise<{
  pokemonInfoList: Pokemon[];
  next: string | null;
  previous: string | null;
}> {
  try {
    if (cache.has(url) && revalidate > Date.now() - cache.get(url).time) {
      const { pokemonInfoList, next, previous } = cache.get(url);
      return {
        pokemonInfoList,
        next,
        previous,
      };
    }

    const { results, next, previous } = await getPokemonsPaginated(url);
    const pokemonInfoList = await _getPokemon(results);
    cache.set(url, {
      pokemonInfoList,
      next,
      previous,
      time: Date.now(),
    });
    return {
      pokemonInfoList,
      next,
      previous,
    };
  } catch (error) {
    return {
      pokemonInfoList: [],
      next: null,
      previous: null,
    };
  }
}

export async function getEvolutionPokemonById(pokemon: Pokemon) {
  if (
    cache.has(pokemon.species.url) &&
    revalidate > Date.now() - cache.get(pokemon.species.url).time
  ) {
    return cache.get(pokemon.species.url).evolutionData;
  }

  try {
    const { evolution_chain } = (await http.get(
      pokemon.species.url
    )) as PokemonSpecies;
    const { chain } = (await http.get(evolution_chain.url)) as EvolutionChain;
    const data = getSpecies(chain);
    const url = (id: string) =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const pokemonWithImage = data.map((pokemon, index) => {
      const splitUrl = pokemon.url.split("/");
      const id = pokemon.url.split("/")[splitUrl.length - 2];
      return {
        ...pokemon,
        image: url(id),
      };
    });
    cache.set(pokemon.species.url, {
      evolutionData: pokemonWithImage,
      time: Date.now(),
    });

    return pokemonWithImage;
  } catch (error) {
    return [];
  }
}
