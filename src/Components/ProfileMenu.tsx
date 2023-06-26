import tw from "twin.macro";
import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

import { User } from "../Interfaces/auth";

interface Props {
  user?: User | null;
}

const Li = tw.li`hover:text-red-600 hover:font-semibold transition-all duration-300 ease-in text-sm px-4 py-3 text-gray-700`;

const ProfileMenu = ({ user }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dropdownContent = (
    <div
      tw="fixed z-10 h-screen w-screen inset-0"
      onClick={() => setIsOpen(false)}
    >
      <div tw="absolute top-24 right-0 w-full sm:top-20 sm:right-10 sm:w-auto text-base list-none rounded-b-lg bg-white divide-y divide-gray-100 sm:rounded-lg shadow">
        <div tw="px-4 py-3">
          <span tw="block text-sm text-gray-900">{user?.name}</span>
          <span tw="block text-sm text-gray-500 truncate dark:text-gray-400">
            {user?.email}
          </span>
        </div>
        <ul tw="py-2">
          <Li>
            <Link href="/profile">Ver perfil</Link>
          </Li>
          <Li>
            <button id="logout" onClick={() => signOut()}>
              Cerrar Sesión
            </button>
          </Li>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <button
        id="profile-menu"
        tw="bg-white w-14 h-14 grid place-items-center rounded-full overflow-hidden"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/img/pokebola.png"
          alt="logo"
          width={40}
          height={40}
          tw="drop-shadow-[0px 0px 10px black] rounded-full"
        />
      </button>

      {isOpen && createPortal(dropdownContent, document.body)}
    </div>
  );
};

export default ProfileMenu;
