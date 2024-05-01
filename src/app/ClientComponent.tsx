"use client"

export const ClientComponent = ({
  cookie,
}: {
  cookie: { name: string; value: string }
}) => {
  return (
    <div>
      {cookie.name}: {cookie.value}
    </div>
  )
}
