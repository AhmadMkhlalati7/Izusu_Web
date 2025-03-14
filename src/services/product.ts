import { prisma } from "@/lib/prisma";


export const store = async (FormData: string) => {
  try {
    const user = await prisma.product.create({
      
    );
    return user;
  } catch {
    return null;
  }
};