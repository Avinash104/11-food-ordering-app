"use client"

import NoResults from "@/components/ui/no-results"
import useCategoryModal from "@/hooks/useCategoryModal"
import { Category } from "@/types"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { HiOutlinePlusCircle, HiOutlineRefresh } from "react-icons/hi"
import CategoryItem from "./components/CategoryItem"

const CategoryPage = () => {
  const router = useRouter()
  const categoryModal = useCategoryModal()
  const [categoryList, setCategoryList] = useState<Category[]>([])

  const getCategories = async () => {
    const categories = await axios.get("/api/categories")
    setCategoryList(categories.data)
  }

  useEffect(() => {
    setCategoryList([])
    getCategories()
  }, [])

  return (
    <div>
      <h1>Categories</h1>
      <div className="w-full flex justify-around">
        <button onClick={getCategories}>
          <HiOutlineRefresh size={24} />
        </button>
        <button onClick={categoryModal.onOpen}>
          {" "}
          <HiOutlinePlusCircle size={24} />{" "}
        </button>
      </div>
      {categoryList.length === 0 ? (
        <NoResults />
      ) : (
        <div>
          {categoryList.map((item) => (
            <div key={item.id}>
              <CategoryItem
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryPage
