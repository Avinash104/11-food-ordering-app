"use client"

import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal"
import useSubModal from "@/hooks/useSubModal"
import { SafeUser } from "@/types/index"
import { signOut } from "next-auth/react"
import { useCallback, useState } from "react"
import { AiFillBell, AiOutlineMenu, AiOutlineUser } from "react-icons/ai"
import Avatar from "../Avatar"
import { ModeToggle } from "../ModeToggle"
import MenuItem from "./MenuItem"

interface NavbarProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<NavbarProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const subModal = useSubModal()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const openSubscription = useCallback(() => {
    if (!currentUser) return loginModal.onOpen()

    subModal.onOpen()
  }, [currentUser, loginModal, subModal])

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={openSubscription}
          className="hidden md:block text-sm dark:bg-slate-500 dark:text-red-500 text-yellow-800 font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Become a Pro Member
        </div>
        <div className="h-8 flex items-center cursor-pointer">
          <ModeToggle />
        </div>
        <div>
          <AiFillBell />
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {currentUser?.image ? (
              <>
                <Avatar src={currentUser?.image} />{" "}
              </>
            ) : (
              <>
                <AiOutlineUser />{" "}
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
                {/* <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" /> */}
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
