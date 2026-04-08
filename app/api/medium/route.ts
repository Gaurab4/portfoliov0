import { NextResponse } from "next/server";
import { getMediumPosts } from "@/lib/medium";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(
    24,
    Math.max(1, Number.parseInt(searchParams.get("limit") ?? "12", 10) || 12),
  );

  try {
    const posts = await getMediumPosts(limit);
    return NextResponse.json(
      { posts },
      {
        headers: {
          "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
        },
      },
    );
  } catch (e) {
    console.error("[medium] feed error", e);
    return NextResponse.json(
      { posts: [], error: "Unable to load Medium posts" },
      { status: 502 },
    );
  }
}
