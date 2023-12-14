import { User } from "@prisma/client"

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}

export interface Product {
  id: string
  title: string
  description: string
  imageSrc: string
  basePrice: number
  isFeatured: boolean
  size: string | null

  // category: Category
}

export interface Category {
  id: string
  title: string
  description: string
  imageSrc: string
}
