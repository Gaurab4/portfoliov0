import Header from "../components/Header";
import { MediumPostCards } from "@/components/portfolio/MediumPostCards";
import { getMediumPosts } from "@/lib/medium";

export const revalidate = 1800;

export default async function Blogs() {
  let posts: Awaited<ReturnType<typeof getMediumPosts>> = [];
  try {
    posts = await getMediumPosts(24);
  } catch {
    posts = [];
  }

  return (
    <div className="min-h-screen relative bg-[#f0efea] flex flex-col">
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-100"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <Header />
      <main className="relative z-10 flex-1 mx-auto w-full max-w-6xl px-6 pt-24 pb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2 animate-fade-in-up">
          05. WRITING
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4 animate-fade-in-up opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards]">
          From the Blog
        </h1>
        <p className="text-zinc-600 mb-10 max-w-2xl animate-fade-in-up opacity-0 [animation-delay:0.08s] [animation-fill-mode:forwards]">
          Writing on{" "}
          <a
            href="https://medium.com/@gaurabth2002"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-700"
          >
            @gaurabth2002
          </a>
          . Updates sync from the public Medium RSS feed.
        </p>
        <MediumPostCards posts={posts} layout="grid" />
      </main>
    </div>
  );
}
