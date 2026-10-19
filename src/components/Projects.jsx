import { FolderKanban, BookMarked, CalendarCheck } from 'lucide-react'
import { projects } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          subtitle="Academic and training projects that connect finance concepts with real business scenarios."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100} className="h-full">
              <article className="card card-hover flex h-full flex-col p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex w-fit items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted"
                >
                  <FolderKanban size={12} />
                  {project.category}
                </span>

                <h3 className="mt-4 text-base font-semibold leading-6 text-heading">{project.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>

                {project.keyAreas.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.keyAreas.map((area) => (
                      <li key={area}>
                        <span className="chip">{area}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {project.publication && (
                  <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-line bg-surface p-3.5">
                    <BookMarked size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-text" />
                    <div className="text-sm">
                      <p className="font-semibold text-heading">Published — {project.publication}</p>
                      <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-muted">
                        <CalendarCheck size={12} aria-hidden="true" />
                        {project.publicationDate}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-6">
                  <span className="text-xs italic text-muted">
                    Documentation available on request
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
