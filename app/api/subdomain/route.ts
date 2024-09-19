import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const host = request.headers.get("host");
  const subdomain = host?.split(".")[0];

  if (!subdomain) {
    return NextResponse.json(
      { error: "No subdomain provided" },
      { status: 400 }
    );
  }
}
