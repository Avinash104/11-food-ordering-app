"use client"

import MenuItem from "@/components/navbar/MenuItem"
import { useRouter } from "next/navigation"

const NavigationSidebar = () => {
  const router = useRouter()
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3 shadow-lg">
      <div className="w-full">
        <MenuItem
          onClick={() => {
            router.push("/admin/categories")
          }}
          label="Category"
        />
        <MenuItem
          onClick={() => {
            router.push("/admin/menu-items")
          }}
          label="Menu Item"
        />
        <MenuItem
          onClick={() => {
            router.push("/admin/orders")
          }}
          label="Orders"
        />
      </div>
    </div>
  )
}

export default NavigationSidebar
