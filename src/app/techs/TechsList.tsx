import { Suspense } from "react"
import { RemoveTechButton } from "./RemoveTechButton"
import axios from "axios"
import { unstable_cache } from "next/cache"
import Link from "next/link"

export default async function TechList() {
  // const getList = unstable_cache(
  //   () => {
  //     return axios.get("http://localhost:8000/techs")
  //   },
  //   [],
  //   { tags: ["techList"] }
  // )

  // const { data } = await getList()

  const response0 = await fetch(
    "https://api.github.com/users/rdg-albuquerque",
    {
      cache: "force-cache", // default
      next: {
        // Revalidate just this request
        // revalidate: false,
      },
      // getServerSideProps
    }
  )

  const response = await fetch("http://localhost:8000/techs", {
    cache: "no-store",
    next: {
      tags: ["techList"],
      // revalidate: false, // Apparently it needs to set revalidate: false so the revalidateTag function works properly, otherwise it will revalidate any request event if the tag doesn't match
    },
  })

  const data = await response.json()

  // console.log({ data })
  return (
    <ul>
      <Link href="/">Home</Link>
      <Suspense fallback={<p>loading...</p>}>
        {data.map((tech) => {
          return (
            <li key={tech.id}>
              {tech.title}
              <RemoveTechButton id={tech.id} />
            </li>
          )
        })}
      </Suspense>
    </ul>
  )
}
