import Box from "@src/components/Box"
import Link from "next/link"
import React from "react"

const getRepos = async () => {
  console.log("fetch repos")
  const response = await fetch(
    "https://api.github.com/users/rdg-albuquerque/repos",
    {
      cache: "no-store",
    }
  )
  return await response.json()
}

export default async function Repos() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  const repos = await getRepos()
  return (
    <Box>
      <h1>Repos</h1>
      <div>{JSON.stringify(repos)}</div>
    </Box>
  )
}
