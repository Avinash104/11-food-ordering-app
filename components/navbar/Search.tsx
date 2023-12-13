"use client"

import { BiSearch } from "react-icons/bi"
import { Input } from "../ui/input"
const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center justify-end mr-2 ">
        <Input />
        <BiSearch size={18} />
      </div>
    </div>
  )
}

export default Search
