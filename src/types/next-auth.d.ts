import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: string;
};

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: ExtendedUser;
  }
}
