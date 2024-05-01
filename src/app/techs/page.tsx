import { AddTechForm } from "./AddTechForm"
import TechList from "./TechsList"

// export const dynamic = "force-dynamic"

export default async function Techs() {
  return (
    <div>
      <TechList />
      <AddTechForm />
    </div>
  )
}
