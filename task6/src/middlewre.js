import { NextResponse } from "next/server";

export function middleware(req) {
  const variant = Math.random() < 0.5 ? "A" : "B";

  const response = NextResponse.next();
  response.headers.set("x-ab-test-variant", variant);

  return response;
}

export const config = {
  matcher: ["/"],
};
