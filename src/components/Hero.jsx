import { Download, ArrowDown, Landmark, BarChart3, Workflow } from 'lucide-react'
import { hero, profile, RESUME_URL } from '../data/content'
import Reveal from './Reveal'

const highlightIcons = [Landmark, BarChart3, Workflow]

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-surface blur-3xl opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent-soft blur-3xl opacity-60"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        {/* Left column */}
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-text shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-heading sm:text-4xl lg:text-[2.75rem]"
            >
              Turning Financial Insights into{' '}
              <span className="text-accent-text">Better Business Decisions.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                Explore My Work
                <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a
                href={RESUME_URL}
                download
                aria-label="Download Matangi V's resume as a PDF"
                className="btn btn-outline"
              >
                <Download size={15} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
              {hero.highlights.map((item, index) => {
                const Icon = highlightIcons[index]
                return (
                  <li key={item.label} className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent-text">
                      <Icon size={15} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-body">{item.label}</span>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        {/* Right column — profile card */}
        <Reveal delay={200} className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="card card-hover relative overflow-hidden p-7">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-solid via-accent to-solid"
            />

            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-solid text-xl font-bold text-white"
              >
                {profile.initials}
              </span>
              <div className="min-w-0">
                <p className="text-lg font-bold text-heading">{profile.name}</p>
                <p className="mt-0.5 text-sm font-medium text-accent-text">{hero.card.role}</p>
              </div>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {hero.card.college}
            </p>

            <ul className="mt-5 space-y-3 border-t border-line pt-5">
              {hero.card.details.map((detail) => (
                <li key={detail.label} className="flex gap-3 text-sm">
                  <span className="w-14 shrink-0 font-semibold text-heading">{detail.label}</span>
                  <span className="text-muted">{detail.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
              {hero.card.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
