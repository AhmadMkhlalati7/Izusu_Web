import { z } from "zod"
 
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const userSchema = z.object({
  id: z.string().uuid().default(() => crypto.randomUUID()),
  email: z.string().email().optional(),
  password: z.string().optional(),
  name: z.string().optional(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
});

export const accountSchema = z.object({
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional(),
  access_token: z.string().optional(),
  expires_at: z.number().optional(),
  token_type: z.string().optional(),
  scope: z.string().optional(),
  id_token: z.string().optional(),
  session_state: z.string().optional(),
});

export const sessionSchema = z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
});

export const verificationTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
});

export const authenticatorSchema = z.object({
  credentialID: z.string(),
  userId: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional(),
});
