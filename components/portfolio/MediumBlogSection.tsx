"use client";

import { useEffect, useState } from "react";
import type { MediumPost } from "@/lib/medium";
import { MediumPostCards } from "./MediumPostCards";

export function MediumBlogSection() {
  const [posts, setPosts] = useState<MediumPost[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/medium?limit=4")
      .then((res) => res.json())
      .then((data: { posts?: MediumPost[] }) => {
        if (!cancelled) setPosts(data.posts ?? []);
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setPosts([]);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (posts === null) {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-4 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-lg bg-zinc-200/80 border border-zinc-200/60 h-28 sm:h-32"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-zinc-500 text-center">
        Couldn&apos;t load posts.{" "}
        <a
          href="https://medium.com/@gaurabth2002"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-800 underline underline-offset-2"
        >
          Open Medium
        </a>
      </p>
    );
  }

  return <MediumPostCards posts={posts} showProfileLink />;
}
