import type { MediumPost } from "@/lib/medium";

const PROFILE = "https://medium.com/@gaurabth2002";

function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function MediumPostCards({
  posts,
  showProfileLink = true,
  layout = "stack",
}: {
  posts: MediumPost[];
  showProfileLink?: boolean;
  layout?: "stack" | "grid";
}) {
  if (posts.length === 0) {
    return (
      <p className="text-zinc-500 text-center max-w-xl mx-auto">
        No posts loaded yet.{" "}
        <a
          href={PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-800 underline underline-offset-2 hover:text-zinc-600"
        >
          Read on Medium
        </a>
      </p>
    );
  }

  const listClass =
    layout === "grid"
      ? "grid sm:grid-cols-2 gap-4 text-left w-full max-w-6xl mx-auto"
      : "space-y-4 text-left w-full max-w-4xl mx-auto";

  return (
    <div className={listClass}>
      {posts.map((post) => (
        <a
          key={post.link}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg bg-white/80 border border-zinc-200/80 p-5 sm:p-6 transition-colors hover:border-zinc-300 hover:bg-white shadow-sm h-full flex flex-col"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 mb-2">
            {formatDate(post.pubDate) ? (
              <>
                <time dateTime={post.pubDate ?? undefined}>{formatDate(post.pubDate)}</time>
                <span className="text-zinc-400">·</span>
              </>
            ) : null}
            <span>Medium</span>
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-2 leading-snug">{post.title}</h3>
          {post.excerpt ? (
            <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
          ) : null}
          <span className="inline-block mt-3 text-sm font-medium text-zinc-800">Read article →</span>
        </a>
      ))}
      {showProfileLink && (
        <div className={`pt-4 text-center ${layout === "grid" ? "sm:col-span-2" : ""}`}>
          <a
            href={PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-900 underline underline-offset-4"
          >
            View all articles on Medium
          </a>
        </div>
      )}
    </div>
  );
}
