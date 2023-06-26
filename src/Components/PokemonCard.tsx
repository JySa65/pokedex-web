import "twin.macro";
import React from "react";
import Image from "next/image";
import { usePalette } from "@lauriys/react-palette";
import { css, theme } from "twin.macro";
import { Tilt } from "react-tilt";

import Card from "./Card";
import { Pokemon } from "../Interfaces/pokemon";
import { capitalizeFirstLetter } from "../utils";
import Link from "next/link";

const defaultOptions = {
  max: 50, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.5, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
};

interface PokemonCardProps {
  pokemon: Pokemon;
  key: string;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const moves = pokemon.moves.map((move) => move.move.name).slice(0, 3);
  const image =
    pokemon.sprites.other?.["official-artwork"].front_default ||
    pokemon.sprites.front_default;
  const palette = usePalette(image);

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <Card tw="h-[22rem]">
        <div
          tw="w-full h-full flex justify-center items-center relative"
          css={css({
            backgroundColor: palette.data.muted || theme`colors.gray.200`,
          })}
        >
          <Tilt options={defaultOptions}>
            <Image
              src={image}
              alt={pokemon.name}
              width={200}
              height={200}
              tw="drop-shadow-[2px 4px 6px black]"
            />
          </Tilt>
          <p
            tw="absolute bottom-0 right-0 text-white text-sm font-bold px-3 py-2 rounded-tl-md"
            css={css({
              background: palette.data.darkMuted || theme`colors.gray.700`,
            })}
          >
            {pokemon.weight / 10} kg
          </p>
        </div>

        <div tw="flex flex-col justify-center w-full h-full px-5 my-5">
          <h2
            tw="text-2xl font-bold text-gray-700 mb-6"
            style={{ color: palette.data.muted }}
          >
            {capitalizeFirstLetter(pokemon.name)}
          </h2>
          <div tw="flex flex-wrap gap-1 ">
            {moves.map((move) => (
              <span key={move} tw="text-sm font-medium text-green-700">
                #{move}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PokemonCard;
