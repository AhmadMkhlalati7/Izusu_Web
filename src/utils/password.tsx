import bcrypt from "bcryptjs";

async function saltAndHashPassword(password: string) {
  const saltRounds = 10; // Number of salt rounds (higher = more secure, but slower)
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export { saltAndHashPassword };
