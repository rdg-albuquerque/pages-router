import { revalidateTag } from "next/cache"
import { AddTechButton } from "./AddTechButton"

export async function AddTechForm() {
  const handleFormAction = async (formData: FormData) => {
    "use server"

    const techName = formData.get("techName")

    // const entries = Object.fromEntries(formData)

    await new Promise((resolve) => setTimeout(resolve, 3000))

    await fetch("http://localhost:8000/techs", {
      method: "POST",
      body: JSON.stringify({
        title: techName,
      }),
    })

    revalidateTag("techList")
  }
  return (
    <form action={handleFormAction}>
      <input type="text" name="techName" placeholder="Digite a tech" />
      <AddTechButton />
    </form>
  )
}
