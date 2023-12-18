import prisma from "@/lib/prismadb"
import { Product } from "@/types"

export async function getFeaturedProduct() {
  const products = await prisma.menuItem.findMany({
    where: {
      isFeatured: true as boolean,
    },
  })
  return products
}
