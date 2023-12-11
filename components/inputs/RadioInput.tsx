"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface RadioInputProps {
  id: string
  label: string
  disabled?: boolean
  register: UseFormRegister<FieldValues>
  required?: boolean
  value: string
  errors: FieldErrors
}

const RadioInput: React.FC<RadioInputProps> = ({
  id,
  label,
  disabled,
  register,
  required,
  value,
  errors,
}) => {
  return (
    <label className="text-black">
      <input type="radio" disabled={disabled} {...register(id)} value={value} />
      {label}
    </label>
  )
}

export default RadioInput
