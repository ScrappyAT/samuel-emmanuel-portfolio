import Image from "next/image";
import { projects } from "@/app/data/projects";
import type { Project } from "@/app/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
      {/* Optional preview image */}
      {project.previewImage && (
        <div className="w-full overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800">
          <Image
            src={project.previewImage}
            alt={project.previewImageAlt || `Preview of ${project.title}`}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      )}

      <div className="p-6 sm:p-8">
      {/* Project number */}
      <span className="mb-4 inline-block font-mono text-xs text-zinc-400 dark:text-zinc-600">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.summary}
      </p>

      {/* Context */}
      <div className="mt-5 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
          Context
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.context}
        </p>
      </div>

      {/* Engineering highlights */}
      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
          Engineering Decisions
        </p>
        <ul className="mt-2.5 space-y-1.5">
          {project.engineeringHighlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
            >
              <span
                className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"
                aria-hidden="true"
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mt-5">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Source link */}
      <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View Source
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-[400px] md:mx-0 md:max-w-none">
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Projects
          </h2>
          <p className="mt-3 max-w-lg text-base text-zinc-500 dark:text-zinc-400">
            Engineering-focused projects demonstrating product thinking, backend
            architecture, and reliable system design.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
