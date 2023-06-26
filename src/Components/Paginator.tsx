import { useState } from "react";
import tw, { styled } from "twin.macro";

import { getAllInfoPokemonPaginated } from "@/src/lib/getAllInfoPokemon";
import { Pokemon } from "../Interfaces/pokemon";

const Button = styled.button(() => [
  tw` bg-red-500
    hover:bg-red-900
    text-white
    font-bold
    py-2
    px-4
    rounded
    focus:outline-none
    focus:shadow-stone-50`,
]);

const Paginator = ({ onChage }: { onChage: (pokemons: Pokemon[]) => void }) => {
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState<string | null>("");
  const [previous, setPrevious] = useState<string | null>(null);

  const handleNext = async () => {
    setLoading(true);
    const _next = next === "" ? null : next;
    const result = await getAllInfoPokemonPaginated(_next);
    setNext(result.next);
    setPrevious(result.previous);
    setLoading(false);
    onChage(result.pokemonInfoList);
  };

  const handlePrevious = async () => {
    setLoading(true);
    const result = await getAllInfoPokemonPaginated(previous);
    setNext(result.next);
    setPrevious(result.previous);
    onChage(result.pokemonInfoList);
    setLoading(false);
  };
  return (
    <div tw="flex justify-between items-center">
      <Button
        data-cy="paginator-previus"
        disabled={!previous || loading}
        onClick={handlePrevious}
      >
        Anterior
      </Button>
      <Button data-cy="paginator-next" disabled={loading} onClick={handleNext}>
        Siguiente
      </Button>
    </div>
  );
};

export default Paginator;
