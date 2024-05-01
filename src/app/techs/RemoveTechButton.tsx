"use client"

import { useState } from "react"
import { handleRemoveTech } from "./actions"

export const RemoveTechButton = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleRemove = async () => {
    try {
      setIsLoading(true)
      await handleRemoveTech(id)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }
  return (
    <button disabled={isLoading} type="submit" onClick={handleRemove}>
      Remove
    </button>
  )
}
