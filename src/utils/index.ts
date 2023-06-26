import { Chain, Species } from "../Interfaces/pokemon";

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getSpecies(data: Chain) {
  const species: Species[] = [];

  function getSpeciesRecursive(evolutionChain: Chain) {
    const specie: Species = {
      name: evolutionChain.species.name,
      url: evolutionChain.species.url,
    };
    species.push(specie);

    if (evolutionChain.evolves_to.length > 0) {
      getSpeciesRecursive(evolutionChain.evolves_to[0]);
    }
  }
  getSpeciesRecursive(data);

  return species;
}
