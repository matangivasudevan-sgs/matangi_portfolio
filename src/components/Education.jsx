import { GraduationCap, CalendarDays, Sparkles } from 'lucide-react'
import { education } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  const [mba, bcom] = education

  return (
    <section id="education" aria-labelledby="education-heading" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Academics"
          title="Education"
          subtitle="A commerce foundation complemented by ongoing management study in finance and analytics."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          {/* MBA — prominent card */}
          <Reveal>
            <article className="card relative h-full overflow-hidden border-l-4 border-l-accent p-7">
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold text-accent"
              >
                <Sparkles size={12} />
                In Progress
              </span>

              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white"
              >
                <GraduationCap size={20} />
              </span>

              <h3 className="mt-4 text-lg font-bold text-navy sm:text-xl">{mba.degree}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{mba.specialization}</p>
              <p className="mt-3 text-sm text-muted">{mba.institution}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5">
                <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                  <CalendarDays size={14} aria-hidden="true" className="text-accent" />
                  {mba.duration}
                </span>
                <span className="inline-flex items-baseline gap-2">
                  <span className="text-sm text-muted">{mba.scoreLabel}:</span>
                  <span className="text-xl font-bold text-navy">{mba.score}</span>
                </span>
              </div>
            </article>
          </Reveal>

          {/* B.Com card */}
          <Reveal delay={120}>
            <article className="card card-hover h-full p-6">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-navy"
              >
                <GraduationCap size={20} />
              </span>

              <h3 className="mt-4 text-base font-semibold text-navy">{bcom.degree}</h3>
              <p className="mt-3 text-sm text-muted">{bcom.institution}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5">
                <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                  <CalendarDays size={14} aria-hidden="true" className="text-accent" />
                  {bcom.duration}
                </span>
                <span className="inline-flex items-baseline gap-2">
                  <span className="text-sm text-muted">{bcom.scoreLabel}:</span>
                  <span className="text-lg font-bold text-navy">{bcom.score}</span>
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
