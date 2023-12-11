"use client"

import useSubModal from "@/hooks/useSubModal"
import {
  CardElement,
  PaymentElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"
import axios from "axios"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import ModalHeading from "../ModalHeading"
import RadioInput from "../inputs/RadioInput"
import Modal from "./Modal"

const SubscriptionModal = () => {
  const subModal = useSubModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      tier: "noble",
      halfYearly: false,
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    console.log(data)
    setIsLoading(false)
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ModalHeading
        title="Ready to explore more?"
        subtitle="Not satisfied with what's available? Become a patron now!!"
      />
      <div className="flex flex-col">
        <h4 className="text-black">Choose your subscription tier.</h4>
        <RadioInput
          id="tier"
          label="Knight"
          disabled={isLoading}
          register={register}
          value="knight"
          errors={errors}
        />
        <RadioInput
          id="tier"
          label="Noble"
          disabled={isLoading}
          register={register}
          value="noble"
          errors={errors}
        />
        <RadioInput
          id="tier"
          label="Viscount"
          disabled={isLoading}
          register={register}
          value="knight"
          errors={errors}
        />
        <RadioInput
          id="tier"
          label="Conqueror"
          disabled={isLoading}
          register={register}
          value="conqueror"
          errors={errors}
        />
      </div>
      <div>
        <label className="text-black">
          <input type="checkbox" {...register("halfYearly")} />
          Half-Yearly
        </label>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={subModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={subModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
}

export default SubscriptionModal
