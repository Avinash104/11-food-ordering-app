"use client"

import { SafeUser } from "@/types"
import Container from "../Container"
import Logo from "./Logo"
import MenuItem from "./MenuItem"
// import Search from "./Search"
import { userType } from "@/app/api/auth/[...nextauth]/route"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import UserMenu from "./UserMenu"

interface NavProps {
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavProps> = ({ currentUser }) => {
  const router = useRouter()
  // useEffect(() => {
  //   const isAdmin = async () => {
  //     const typeOfUser = await userType()
  //     if (typeOfUser === "ADMIN") router.push("/admin")
  //   }
  //   isAdmin()
  // }, [router])

  return (
    <div className="fixed w-full top-0 z-50 shadow-md bg-gray-200/90 dark:bg-slate-500">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-around gap-3 md:gap-0 ">
            <Logo />
            {/* Search will be implemented later */}
            {/* <Search /> */}
            <div className="flex items-center justify-evenly gap-x-6">
              <Link href={"/menu"}>Menu</Link>
              <Link href={"/#about"}>About</Link>
              <Link href={"/#contact"}>Contact</Link>
            </div>

            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
