import { Category } from "@/types"

interface CategoryItemProps {
  title: string
  description: string
  imageSrc: string
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex">
      <div>{title}</div>
      <div>{description} </div>
    </div>
  )
}

export default CategoryItem
