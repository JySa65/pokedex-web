"use client";
import { theme } from "twin.macro";

import { User } from "../Interfaces/auth";
import Card from "./Card";
import InfoItem from "./PokemonDetail/InfoItem";

const ProfileContent = ({ user }: { user: User }) => {
  return (
    <div tw=" mt-32 container m-[0 auto] ">
      <Card tw=" items-start p-5">
        <h1 tw="text-6xl">Perfil</h1>

        <div tw="my-5">
          <InfoItem
            label="Correo Electronico"
            value={user.email}
            color={theme`colors.red.500`}
          />
          <InfoItem
            label="Nombre Completo"
            value={user.name}
            color={theme`colors.red.500`}
          />

          <InfoItem
            label="Telefono"
            value={user.phone}
            color={theme`colors.red.500`}
          />
        </div>
      </Card>
    </div>
  );
};

export default ProfileContent;
