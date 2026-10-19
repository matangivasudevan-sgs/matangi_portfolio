import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="bg-surface py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Continued learning across finance, analytics, digital tools, and banking."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 70} className="h-full">
              <li className="card card-hover flex h-full items-start gap-4 p-5">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-text"
                >
                  <BadgeCheck size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold leading-5 text-heading">{cert.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-muted">{cert.organization}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
