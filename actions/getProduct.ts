import prisma from "@/lib/prismadb"
import { Product } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export async function getFeaturedProduct() {
  const products = await prisma.menuItem.findMany({
    where: {
      isFeatured: true as boolean,
    },
  })
  return products
}
