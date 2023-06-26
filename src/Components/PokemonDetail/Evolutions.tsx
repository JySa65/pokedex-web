/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import tw from "twin.macro";
import { Pokemon, Species } from "@/src/Interfaces/pokemon";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { getEvolutionPokemonById } from "@/src/lib/getAllInfoPokemon";

const exclude = ["other", "versions"];

const Container = tw.div`w-full flex flex-wrap justify-center items-center`;

const Item = tw.div`flex flex-col items-center mx-2`;

const Evolutions = ({ pokemon }: { pokemon: Pokemon }) => {
  const [species, setSpecies] = useState<Species[]>([]);

  useEffect(() => {
    (async () => {
      const result = await getEvolutionPokemonById(pokemon);
      setSpecies(result);
    })();
  }, []);

  return (
    <Container>
      {species.map((specie) => {
        return (
          <Item key={specie.url}>
            <Tilt options={{ scale: 2 }}>
              <Image
                src={specie.image!}
                alt="pokemon"
                width={100}
                height={100}
                tw="drop-shadow-[2px 4px 6px black]"
              />
            </Tilt>
            <h4 tw="text-xl font-semibold">{specie.name}</h4>
          </Item>
        );
      })}
    </Container>
  );
};

export default Evolutions;
