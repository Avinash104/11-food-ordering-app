"use client"

import { SafeUser } from "@/types"
import Container from "../Container"
import Logo from "./Logo"
import MenuItem from "./MenuItem"
// import Search from "./Search"
import Link from "next/link"
import UserMenu from "./UserMenu"

interface NavProps {
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full shadow-sm bg-slate-400">
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
