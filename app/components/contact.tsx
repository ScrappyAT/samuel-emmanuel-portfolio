export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
            I&apos;m open to remote opportunities and available for planned
            overlap with UK, European, and US teams.
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[400px] md:max-w-lg">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
            {/* Info */}
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Samuel Emmanuel
                </p>
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                  Lagos, Nigeria
                </p>
              </div>

              <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <p>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    Availability:
                  </span>{" "}
                  9:00 AM – 5:00 PM WAT
                </p>
                <p>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    Status:
                  </span>{" "}
                  Open to remote opportunities
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

            {/* Contact Methods */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:chinazasamuelemmanuel@gmail.com"
                className="group flex flex-col justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
              >
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Email
                </span>
                <span className="mt-2 break-all text-sm font-medium text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                  chinazasamuelemmanuel@gmail.com
                </span>
              </a>

              <a
                href="tel:+2347033079745"
                className="group flex flex-col justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
              >
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Phone
                </span>
                <span className="mt-2 text-sm font-medium text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                  +234 703 307 9745
                </span>
              </a>

              <a
                href="https://github.com/ScrappyAT"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
              >
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  GitHub
                </span>
                <span className="mt-2 text-sm font-medium text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                  ScrappyAT
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/cs-emmanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
              >
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </span>
                <span className="mt-2 text-sm font-medium text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                  cs-emmanuel
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
