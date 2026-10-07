export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-[400px] md:mx-0 md:max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            About
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Background
          </h2>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a Product Engineer with a background in IT and
              infrastructure. I work across product thinking, frontend and
              backend engineering, APIs, databases, and production environments.
            </p>
            <p>
              My infrastructure background gives me experience beyond
              application code — servers, networking, hosting, cloud services,
              and troubleshooting production systems. I&apos;m currently
              expanding that foundation into DevOps, system design, and AI
              product engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
