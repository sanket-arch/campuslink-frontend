import { NextResponse } from "next/server";

export async function POST(req) {
  const { key, value, httpOnly } = await req.json();

  const res = NextResponse.json({ success: true });

  // set HttpOnly cookie
  res.cookies.set(key, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only HTTPS in prod
    sameSite: "strict",
    secure: true,
    priority: "high",
    path: "/",
    maxAge: 30 * 60, // 30 minutes,
    expires: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes
  });

  return res;
}