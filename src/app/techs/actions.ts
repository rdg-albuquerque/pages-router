"use server"

import { revalidateTag } from "next/cache"

export const handleRemoveTech = async (id) => {
  console.log("handle Remove", { id })
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch("http://localhost:8000/techs/" + id, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to remove tech")
  }

  revalidateTag("tagList")
}
