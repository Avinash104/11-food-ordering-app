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
  category: Category
  name: string
  price: string
  isFeatured: boolean
  size: number
  imagesSrc: string
}

export interface Category {
  id: string
  name: string
}
