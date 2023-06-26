import { NextPage } from "next";
import { Suspense } from "react";
import { getPokemon } from "@/src/data/actions";
import Loader from "@/src/Components/Loader";
import Header from "@/src/Components/Header";
import PokemosDetail from "@/src/Components/PokemonDetail";

type Props = NextPage<{
  params: {
    id: string;
  };
}>;

const Pokemon: Props = async (props) => {
  const pokemon = await getPokemon(props.params.id);

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <PokemosDetail pokemon={pokemon} />
    </Suspense>
  );
};

export default Pokemon;
