"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const Banner: React.FC = () => {
  const router = useRouter()
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full">
      <Image src="/food-billboard.jpg" layout="fill" objectFit="cover" alt="" />
      <div className="absolute top-3/4 w-full text-center">
        <p className="text-xl md:text-5xl text-white">
          Not sure what to eat? Perfect.
        </p>
        <button
          onClick={() => {
            router.push("/#hero")
          }}
          className="bg-white rounded-full text-purple-500 font-bold py-2 px-4 md:py-4 md:px-8 my-3 shadow-md hover:shadow-xl active:scale-90  transition duration-150 text-xs"
        >
          Checkout our featured list
        </button>
      </div>
    </div>
  )
}

export default Banner
