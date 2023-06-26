import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import "@/src/styles/globals.css";
import StyledComponentsRegistry from "@/src/lib/registry";
import { NextAuthProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokedex",
  description: "Busca a tu pokemon favorito",
};

export default async function RootLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <NextAuthProvider>{children}</NextAuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
