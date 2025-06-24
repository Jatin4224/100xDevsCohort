import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  //red.body?

  const data = await req.json();
  console.log(data);
  return NextResponse.json({
    message: "You have been signup",
  });
}
