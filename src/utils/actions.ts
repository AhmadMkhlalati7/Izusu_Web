"use server";

import { signIn } from "@/auth";

export async function loginAction(formData) {
  return await signIn("credentials", formData);
}
