"use client";
import "twin.macro";
import { Pokemon } from "@/src/Interfaces/pokemon";
import { usePalette } from "@lauriys/react-palette";
import Image from "next/image";

import ImagePokemon from "./ImagePokemon";
import Card from "../Card";
import { capitalizeFirstLetter } from "@/src/utils";
import InfoItem from "./InfoItem";
import Sprites from "./Sprites";

const PokemosDetail = ({ pokemon }: { pokemon: Pokemon }) => {
  const image =
    pokemon.sprites.other?.["official-artwork"].front_default ||
    pokemon.sprites.front_default;
  const palette = usePalette(image);

  return (
    <div tw="mt-24 overflow-x-hidden h-[calc(100vh - theme('spacing.24'))] relative">
      <Card tw="m-5 absolute h-[95%] w-[calc(100% - theme('spacing.10'))] md:w-[60%] z-30 ">
        <div tw="w-full h-full relative">
          <div tw="absolute right-0 bottom-96 block md:hidden">
            <ImagePokemon
              color={palette.data.muted!}
              image={image!}
              name={pokemon.name}
            />
          </div>
          <div tw="overflow-y-auto overflow-x-hidden w-full h-full p-7 relative">
            <div tw="flex items-center justify-between">
              <div tw="flex items-center">
                <Image
                  src="/img/pokebola.png"
                  alt="pokeball"
                  width={50}
                  height={50}
                  tw="w-10 h-10 animate-spin"
                />
                <h2
                  tw="text-3xl font-bold ml-2"
                  style={{ color: palette.data.lightMuted }}
                >
                  #{pokemon.id}
                </h2>
                <h1
                  tw="text-3xl font-bold ml-2"
                  style={{ color: palette.data.lightMuted }}
                >
                  {capitalizeFirstLetter(pokemon.name)}
                </h1>
              </div>

              <div tw="block md:hidden">
                <Image
                  src={pokemon.sprites.front_default}
                  alt="pokemon"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div tw="flex flex-wrap mt-5">
              <div tw="w-full">
                <InfoItem
                  label="Height"
                  value={`${pokemon.height / 10} Mts`}
                  color={palette.data.lightMuted}
                />

                <InfoItem
                  label="Weight"
                  value={`${pokemon.weight / 10} Kgs`}
                  color={palette.data.lightMuted}
                />

                <InfoItem
                  label="Abilities"
                  value={pokemon.abilities.map(
                    (ability) => ability.ability.name
                  )}
                  color={palette.data.lightMuted}
                />

                <InfoItem
                  label="Types"
                  value={pokemon.types.map((type) => type.type.name)}
                  color={palette.data.lightMuted}
                />

                <InfoItem
                  label="Game Indices"
                  value={pokemon.game_indices.map((game) => game.version.name)}
                  color={palette.data.lightMuted}
                />

                <InfoItem
                  label="Species"
                  value={pokemon.species.name}
                  color={palette.data.lightMuted}
                />

                <InfoItem
                  label="Forms"
                  value={pokemon.forms.map((form) => form.name)}
                  color={palette.data.lightMuted}
                />

                <InfoItem
                  label="Base Experience"
                  value={String(pokemon.base_experience)}
                  color={palette.data.lightMuted}
                />

                <InfoItem
                  label="Moves"
                  value={pokemon.moves.map((move) => move.move.name)}
                  color={palette.data.lightMuted}
                />
                <InfoItem
                  label="Sprites"
                  value={""}
                  color={palette.data.lightMuted}
                />
                <Sprites sprites={pokemon.sprites ?? {}} />
              </div>
            </div>
          </div>
        </div>
      </Card>

      <ImagePokemon
        color={palette.data.muted!}
        image={image!}
        name={pokemon.name}
      />
    </div>
  );
};

export default PokemosDetail;
