"use client"

import useCart from "@/hooks/useCart"
import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal"
import { SafeUser } from "@/types/index"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai"
import { HiShoppingCart } from "react-icons/hi"
import Avatar from "../Avatar"
import { ModeToggle } from "../ModeToggle"
import { Button } from "../ui/button"
import MenuItem from "./UserMenuItem"

interface NavbarProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<NavbarProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const cart = useCart()

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="h-8 flex items-center cursor-pointer">
          <ModeToggle />
        </div>
        <div>
          <Button
            onClick={() => router.push("/cart")}
            className="flex items-center rounded-full bg-black px-4 py-2 relative"
          >
            <HiShoppingCart size={20} color="white" />
            <span className="ml-2 text-xs font-medium text-white absolute top-5 right-3 bg-orange-500 rounded-full px-0.5">
              {cart.items.length}
            </span>
          </Button>
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 md:border-3 border-slate-400 flex flex-row items-center gap-2 border-2 space-x-2 space-y-2 shadow-sm rounded-full cursor-pointer hover:shadow-lg transition"
        >
          <AiOutlineMenu size={20} color="black" />
          <div className="hidden md:block">
            {currentUser?.image ? (
              <>
                <Avatar src={currentUser?.image} />{" "}
              </>
            ) : (
              <>
                <AiOutlineUser size={20} />{" "}
              </>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My trips" />
                <MenuItem onClick={() => {}} label="My favorities" />
                <MenuItem onClick={() => {}} label="My reservations" />
                <MenuItem onClick={() => {}} label="My properties" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
