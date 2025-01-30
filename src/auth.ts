import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthConfig, User } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import { v4 as uuid } from "uuid";
import { prisma } from "./lib/prisma";
import { getUserFromDb } from "./lib/db";
import { encode as defaultEncode } from "next-auth/jwt"

const adapter = PrismaAdapter(prisma);

const authConfig: NextAuthConfig = {
  adapter,
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [

    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const res = await getUserFromDb(email as string, password as string);
        if (res.success) {
          return res.data as User;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    
  
    async jwt({ token, user, account }) {
      if (account?.provider === 'credentials') {
        token.credentials = true;
      }
      return token;
    },
    authorized: async ({ auth,request }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      console.log(auth,request)
      return !!auth
    },
  },
  jwt: {
    encode: async function (params) {
      // console.log(params);
      
      if (params.token?.credentials) {
        const sessionToken = uuid();

        if (!params.token.sub) {
          throw new Error("No user ID found in token");
        }
        // console.log(params);
        

        const createdSession = await prisma.session.create({
          data: {
            sessionToken,
            userId: params.token.sub,
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
          },
        });

        if (!createdSession) {
          throw new Error("Failed to create session");
        }

        return sessionToken;
      }
      return defaultEncode(params);
    },
  },
  secret: process.env.AUTH_SECRET!,
  experimental: { enableWebAuthn: true },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
