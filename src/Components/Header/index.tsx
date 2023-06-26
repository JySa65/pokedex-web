"use client";
import "twin.macro";

import Image from "next/image";
import Link from "next/link";
import ProfileMenu from "../ProfileMenu";
import { User } from "@/src/Interfaces/auth";
import { useSession } from "next-auth/react";

interface Props {
  user?: User | null;
}

const Header = ({ user }: Props) => {
  const session = useSession();

  return (
    <nav tw="bg-red-700 h-24 flex justify-between items-center px-5 md:px-10 gap-3 shadow-2xl fixed w-full inset-0 z-10">
      <Link href={"/"} tw="flex-1">
        <Image
          src="/img/pokemon-logo.png"
          alt="logo"
          width={200}
          height={200}
          tw="drop-shadow-[2px 4px 6px black] w-52"
        />
      </Link>

      <ProfileMenu user={session!.data?.user as User} />
    </nav>
  );
};

export default Header;
