import React, { useMemo } from "react";
import tw from "twin.macro";
import { Pokemon } from "@/src/Interfaces/pokemon";
import Image from "next/image";
import { Tilt } from "react-tilt";

const exclude = ["other", "versions"];

const Container = tw.div`w-full flex flex-wrap justify-center items-center`;

const Item = tw.div`flex flex-col items-center mx-2`;

const Sprites = ({ sprites }: { sprites: Pokemon["sprites"] }) => {
  const _sprites = useMemo(() => {
    const spritesArray = Object.entries(sprites);
    return spritesArray.filter(
      (sprite) => !exclude.includes(sprite[0]) && sprite[1] !== null
    );
  }, [sprites]);

  return (
    <Container>
      {_sprites.map((sprite) => {
        return (
          <Item key={sprite[0]}>
            <Tilt options={{ scale: 2 }}>
              <Image
                src={sprite[1]}
                alt="pokemon"
                width={100}
                height={100}
                tw="drop-shadow-[2px 4px 6px black]"
              />
            </Tilt>
            <h4 tw="text-xl font-semibold">{sprite[0]}</h4>
          </Item>
        );
      })}
    </Container>
  );
};

export default Sprites;
