import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // https://nextjs.org/docs/app/building-your-application/routing/middleware#using-cookies
  response.cookies.set("foo", "bar")
  return response
  //   return NextResponse.redirect(new URL("/", request.url))
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/"],
// }
