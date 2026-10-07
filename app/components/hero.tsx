import Image from "next/image";

export function Hero() {
  return (
    <section className="relative px-6 pt-24 pb-12 md:pt-44 md:pb-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="max-w-2xl flex-1">
            {/* Location badge */}
            <div className="mb-4 flex flex-wrap items-center gap-2 md:mb-6 md:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                Lagos, Nigeria
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                Open to Remote
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 min-[360px]:gap-4 md:block">
              <div className="flex-1">
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
                  <span className="block md:inline">Samuel</span>{" "}
                  <span className="block md:inline">Emmanuel</span>
                </h1>

                <p className="mt-2 text-base font-medium text-zinc-500 dark:text-zinc-400 sm:text-lg md:mt-3 md:text-xl">
                  Product Engineer{" "}
                  <span className="text-zinc-300 dark:text-zinc-600">|</span>{" "}
                  AI-Assisted Development
                </p>
              </div>

              {/* Mobile Portrait */}
              <div className="w-[90px] shrink-0 min-[360px]:w-[110px] min-[400px]:w-[125px] sm:w-[140px] md:hidden">
                <div className="relative aspect-square overflow-hidden rounded-full border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                  <Image
                    src="/samuel-emmanuel.jpeg"
                    alt="Samuel Emmanuel"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 140px, 0px"
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-xl md:mt-6 md:text-2xl">
              I help turn ideas into well-designed, reliable products people
              actually want to use.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base md:mt-4">
              Combining product thinking, software engineering, and infrastructure
              experience to build digital products that work reliably in
              production.
            </p>

            <div className="mt-6 flex flex-col min-[360px]:flex-row gap-3 md:mt-8 md:gap-4">
              <a
                href="#work"
                className="inline-flex flex-1 items-center justify-center rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 md:flex-none"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex flex-1 items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-300 dark:hover:bg-zinc-800/50 md:flex-none"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Desktop Portrait */}
          <div className="hidden shrink-0 md:block md:w-64 lg:w-72">
            <div className="relative aspect-square overflow-hidden rounded-full border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/samuel-emmanuel.jpeg"
                alt="Samuel Emmanuel"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 256px, 288px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
