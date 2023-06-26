import Header from "@/src/Components/Header";
import { Suspense } from "react";

import { getAllInfoPokemon } from "../lib/getAllInfoPokemon";
import ListPokemon from "../Components/ListPokemon";
import Loader from "../Components/Loader";

export default async function Main() {
  const pokemons = await getAllInfoPokemon();

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <ListPokemon pokemons={pokemons} />
    </Suspense>
  );
}
