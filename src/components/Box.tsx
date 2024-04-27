import React from "react"

type Element = "div" | "section" | "main"

interface BoxProps {
  children: React.ReactNode
  element?: Element
}

const Box = ({ children, element }: BoxProps) => {
  const Element = element || "div"
  return <Element>{children}</Element>
}

export default Box
