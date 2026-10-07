interface TechGroup {
  label: string;
  items: string[];
}

const currentTech: TechGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    label: "Data",
    items: ["PostgreSQL"],
  },
  {
    label: "Infrastructure & Tools",
    items: ["Git", "GitHub", "Vercel", "Railway", "cPanel"],
  },
];

const expanding: string[] = [
  "Docker",
  "CI/CD",
  "Redis",
  "Queues",
  "Observability",
  "RAG",
];

export function TechStack() {
  return (
    <section className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-[400px] md:mx-0 md:max-w-none">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
          Capabilities
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Technologies
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentTech.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Expanding section */}
          <div>
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Currently Expanding Into
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {expanding.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-dashed border-zinc-300 bg-transparent px-3 py-1.5 text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
