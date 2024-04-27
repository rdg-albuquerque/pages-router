import Box from "@src/components/Box"
import Link from "next/link"
import React from "react"

type PageProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(props: PageProps) {
  console.log("generated props", props)
  return {
    title: props.params.slug,
  }
}

const Nested = (props: PageProps) => {
  return (
    <Box>
      <h1>{`Nested ${props.params.slug}`}</h1>
      <Link href="/">Home</Link>
    </Box>
  )
}

export default Nested
