import { cookies } from "next/headers";

export async function GET(request: Request) {
  return new Response("Hello, Api!", {
    status: 200,
  });
}
