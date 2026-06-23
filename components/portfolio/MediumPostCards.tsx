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
      <p className="mx-auto max-w-xl text-center text-zinc-600 dark:text-zinc-300">
        No posts loaded yet.{" "}
        <a
          href={PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 underline underline-offset-2 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300"
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
          className="block flex h-full flex-col rounded-lg border border-zinc-200/70 bg-white/90 p-5 transition-colors hover:border-emerald-300/80 hover:bg-emerald-50/40 sm:p-6 dark:border-zinc-700 dark:bg-[#1a211e] dark:hover:border-emerald-500/50 dark:hover:bg-[#1f2824]"
        >
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            {formatDate(post.pubDate) ? (
              <>
                <time dateTime={post.pubDate ?? undefined}>{formatDate(post.pubDate)}</time>
                <span className="text-zinc-400 dark:text-zinc-500">·</span>
              </>
            ) : null}
            <span>Medium</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-50">{post.title}</h3>
          {post.excerpt ? (
            <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-200">{post.excerpt}</p>
          ) : null}
          <span className="mt-3 inline-block text-sm font-medium text-emerald-700 dark:text-emerald-400">Read article →</span>
        </a>
      ))}
      {showProfileLink && (
        <div className={`pt-4 text-center ${layout === "grid" ? "sm:col-span-2" : ""}`}>
          <a
            href={PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            View all articles on Medium
          </a>
        </div>
      )}
    </div>
  );
}
