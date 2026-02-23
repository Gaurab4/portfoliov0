import Header from "../components/Header";

export default function Blogs() {
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
      <main className="relative z-10 flex-1 mx-auto w-full max-w-6xl px-6 pt-24 pb-12 flex flex-col items-center justify-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2 animate-fade-in-up">
          05. WRITING
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8 animate-fade-in-up opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards]">
          From the Blog
        </h1>
        <p className="text-xl text-zinc-500">Coming soon</p>
      </main>
    </div>
  );
}
