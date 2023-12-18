"use client"

import useCategoryModal from "@/hooks/useCategoryModal"
import axios from "axios"
import { signIn } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { AiFillFacebook } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import Heading from "../Heading"
import Button from "../ui/ModalButton"
import Input from "../ui/ModalInput"
import Modal from "./Modal"

const CategoryModal = () => {
  const router = useRouter()
  const categoryModal = useCategoryModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      imageSrc: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios
      .post("/api/categories", { ...data, redirect: false })
      .then((response) => {
        setIsLoading(false)

        if (response?.statusText === "OK") {
          toast.success("Category Added")
          categoryModal.onClose()
        } else {
          toast.error(response.statusText)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Create Category"
        subtitle="Create a category of your choice!"
      />

      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="description"
        label="description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="imageSrc"
        label="description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Create"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Cancel"
        icon={AiFillFacebook}
        onClick={() => signIn("facebook")}
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={categoryModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={categoryModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default CategoryModal
