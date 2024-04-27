import Box from "@src/components/Box"
import Repos from "@src/components/Repos"
import Link from "next/link"
import React, { Suspense } from "react"
import Loading from "../loading"

const Dashboard = () => {
  return (
    <Box>
      <h1>Dashboard</h1>
      <Link href="/">Home</Link>
      <Suspense fallback={<Loading />}>
        <Repos />
      </Suspense>
    </Box>
  )
}

export default Dashboard
