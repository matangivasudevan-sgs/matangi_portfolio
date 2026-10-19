import { Building2, MapPin, CalendarDays } from 'lucide-react'
import { experiences } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          subtitle="Practical exposure gained through structured enterprise training and hands-on accounting work."
        />

        <div className="relative mt-12">
          {/* Timeline line */}
          <span
            aria-hidden="true"
            className="absolute left-[15px] top-2 bottom-2 w-px bg-line sm:left-[19px]"
          />

          <ol className="space-y-6">
            {experiences.map((exp, index) => (
              <li key={exp.role} className="relative pl-11 sm:pl-14">
                {/* Timeline dot */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-white sm:h-10 sm:w-10"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>

                <Reveal delay={index * 100}>
                  <article className="card card-hover p-6">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <div>
                        <h3 className="text-base font-semibold text-navy sm:text-lg">{exp.role}</h3>
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                          <span className="inline-flex items-center gap-1.5">
                            <Building2 size={14} aria-hidden="true" className="text-accent" />
                            {exp.organization}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={14} aria-hidden="true" className="text-accent" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                        <CalendarDays size={12} aria-hidden="true" />
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
