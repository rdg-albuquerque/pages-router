"use client"

import { useFormStatus } from "react-dom"

export const AddTechButton = () => {
  const formStatus = useFormStatus()

  console.log({ formStatus })
  return (
    <button type="submit" disabled={formStatus.pending}>
      Add Tech
    </button>
  )
}
