import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host");
  const subdomain = hostname?.split(".")[0] || null;

  // Route requests based on subdomains
  if (subdomain === "sushi") {
    // return NextResponse.rewrite(new URL("/sushi", req.url));
    // const response = NextResponse.next();
    // response.headers.set("isSushi", "true");
    // return response;
    url.pathname = `/sushi${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  //   if (subdomain === "app") {
  //     return NextResponse.rewrite(`/app/${req.nextUrl.pathname}`);
  //   }

  // Default behavior for the primary domain
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
