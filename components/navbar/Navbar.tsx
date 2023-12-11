"use client"

import useSubModal from "@/hooks/useSubModal"
import { SafeUser } from "@/types"
import { AiFillStar, AiOutlineLogin } from "react-icons/ai"
import Container from "../Container"
import Logo from "../Logo"
import UserMenu from "./UserMenu"

interface NavProps {
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavProps> = ({ currentUser }) => {
  const subModal = useSubModal()
  return (
    <div className="fixed w-full shadow-sm bg-slate-400">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0 ">
            <Logo />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
