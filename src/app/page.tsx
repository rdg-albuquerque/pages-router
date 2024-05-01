// "use client"
import Box from "@src/components/Box"
import Repos from "@src/components/Repos"
import { cookies, headers } from "next/headers"
import Link from "next/link"
import React, { Suspense } from "react"
import Loading from "./loading"
import { AddTechButton } from "./techs/AddTechButton"
import { ClientComponent } from "./ClientComponent"

// export const revalidate = 10 => Revalidate all page

const Home = async (props) => {
  const userCookies = cookies()
  const userHeaders = headers()

  const foo = userCookies.get("foo")

  console.log("foo cookie", foo)

  const response = await fetch("https://api.github.com/users/rdg-albuquerque", {
    next: {
      // Revalidate just this request
      // revalidate: 10,
    },
    // getServerSideProps
    // cache: "no-store",
  })
  const user = await response.json()

  return (
    <Box>
      <h1>Home</h1>
      <Link prefetch={true} href="/dashboard">
        Dashboard
      </Link>
      <Link prefetch={false} href="/techs">
        Techs
      </Link>
      <ClientComponent cookie={foo} />
      <div>{user.name}</div>
    </Box>
  )
}

export default Home
