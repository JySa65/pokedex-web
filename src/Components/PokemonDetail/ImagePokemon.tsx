import Image from "next/image";
import React from "react";
import { Tilt } from "react-tilt";
import { css, theme } from "twin.macro";

const ImagePokemon = ({
  color,
  image,
  name,
}: {
  color: string;
  image: string;
  name: string;
}) => {
  return (
    <div tw="absolute right-0">
      <div
        tw="flex border-t-[calc(100vh - theme('spacing.24'))]  border-r-[500px] "
        css={css({
          width: 0,
          height: 0,
          borderRightColor: color || theme`colors.dark.neutral`,
          borderTopColor: theme`colors.transparent`,
        })}
      />

      <div tw="hidden md:block absolute right-20 top-[calc(((100vh - theme('spacing.24')) * 0.5) - 11.5rem)] z-10">
        <Tilt options={{ scale: 1.2 }}>
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            tw="w-[23rem] h-[23rem]"
          />
        </Tilt>
      </div>
    </div>
  );
};

export default ImagePokemon;
