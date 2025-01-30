
export { auth as middleware } from "@/auth"

// Config for matching the right paths
export const config = {
  matcher: ["/((?!api|login|_next/static|_next/image|favicon.ico).*)"], 
};
