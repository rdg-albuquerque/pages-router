import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard", // Concatenando com o title vindo de nested pages, ex: dashboard/1
  },
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <p>dashboard layout</p>
      {children}
    </div>
  )
}
