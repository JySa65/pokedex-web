"use client";
import "twin.macro";

import { useState } from "react";
import { Pokemon } from "../Interfaces/pokemon";
import PokemonCard from "./PokemonCard";
import Paginator from "./Paginator";

interface Props {
  pokemons: Pokemon[];
}

const ListPokemon = ({ pokemons }: Props) => {
  const [data, setData] = useState<Pokemon[]>(pokemons || []);

  const handleChangesPaginator = (pokemons: Pokemon[]) => {
    setData(pokemons);
  };

  return (
    <div tw="mt-32 mb-12 px-8 md:px-16">
      <Paginator onChage={handleChangesPaginator} />
      <div tw="my-8 grid gap-5 items-center [grid-template-columns: repeat(auto-fit, minmax(270px, 1fr))]">
        {data.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id.toString()} />
        ))}
      </div>
      <Paginator onChage={handleChangesPaginator} />
    </div>
  );
};

export default ListPokemon;
