import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import authUser from "@/src/data/auth.json";
import { ILogin, User } from "../Interfaces/auth";
import CustomResponse from "../utils/response";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 day
    updateAge: 6 * 60 * 60, // 6 hours
  },
  providers: [
    CredentialsProvider({
      id: "login",
      name: "Iniciar Sesion",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<User | null> {
        const { email, password } = credentials as ILogin;

        if (!email || !password) {
          throw new Error(
            new CustomResponse({
              msg: "Email and password are required",
              onlyJson: true,
            }).http400() as string
          );
        }

        const user: User = authUser.find(
          (user) =>
            user.email === email.trim() && user.password === password.trim()
        )!;

        if (!user) {
          throw new Error(
            new CustomResponse({
              msg: "Invalid credentials",
              onlyJson: true,
            }).http400() as string
          );
        }

        if (!user.isActive) {
          throw new Error(
            new CustomResponse({
              msg: "User is not active",
              onlyJson: true,
            }).http400() as string
          );
        }

        const _user = { ...user, password: undefined };

        delete _user.password;
        return _user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user = token.user as User;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
