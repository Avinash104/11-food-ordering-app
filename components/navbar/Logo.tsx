"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
const Logo = () => {
  const router = useRouter()
  return (
    <Link
      className="text-primary font-semibold text-2xl whitespace-nowrap"
      href={"/"}
    >
      ST PIZZA
    </Link>
  )
}

export default Logo
