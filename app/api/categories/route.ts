import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function GET() {
  const categories = await prisma.category.findMany()
  return NextResponse.json(categories)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { title, description, imageSrc } = body

  const category = await prisma.category.create({
    data: {
      title,
      description,
      imageSrc,
    },
  })

  return NextResponse.json(category)
}
