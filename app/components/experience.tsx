interface ProgressionStep {
  label: string;
  description: string;
  status?: "current" | "expanding";
}

const progressionSteps: ProgressionStep[] = [
  {
    label: "IT & Infrastructure",
    description: "Technical support, servers, networking, and cloud services",
  },
  {
    label: "Software Engineering",
    description: "Full-stack development, APIs, and database systems",
  },
  {
    label: "Product Engineering",
    description: "Product thinking combined with engineering execution",
    status: "current",
  },
  {
    label: "AI Product Engineering",
    description: "Integrating AI capabilities into reliable product systems",
    status: "expanding",
  },
];

const responsibilities = [
  "Technical & IT support",
  "Servers & hosting",
  "Networking",
  "Email systems & Microsoft 365",
  "cPanel / WHM",
  "Backups & security",
  "Cloud services",
  "Vendor coordination",
  "ERP implementation support",
  "Production troubleshooting",
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-[400px] md:mx-0 md:max-w-none">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
          Experience
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Background & Progression
        </h2>

        {/* Career progression */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Career Progression
            </h3>
            <div className="mt-6 space-y-0">
              {progressionSteps.map((step, index) => (
                <div key={step.label} className="relative flex gap-4">
                  {/* Vertical line and dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full border-2 ${
                        step.status
                          ? "border-zinc-900 bg-zinc-900 dark:border-zinc-100 dark:bg-zinc-100"
                          : "border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-950"
                      }`}
                    />
                    {index < progressionSteps.length - 1 && (
                      <div className="w-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <p
                      className={`text-sm font-semibold ${
                        step.status
                          ? "text-zinc-900 dark:text-zinc-100"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      {step.label}
                      {step.status === "current" && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                          Current
                        </span>
                      )}
                      {step.status === "expanding" && (
                        <span className="ml-2 inline-flex items-center rounded-full border border-dashed border-zinc-300 px-2 py-0.5 text-[10px] font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-500">
                          Expanding into
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current role */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Current Role
            </h3>
            <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                  IT Analyst
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  N.U.E Offshore Resources Limited
                </p>
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-500">
                  October 2023 – Present · Lagos, Nigeria
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  Relevant Experience
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {responsibilities.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
                This infrastructure and operations experience directly
                complements my engineering work — understanding production
                systems, networking, and cloud services from the operations side
                informs how I build and ship software.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
